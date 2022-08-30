import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./user.schema";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { CreateStudentDto } from "./dto/createStudent.dto";
import { CreateTeacherDto } from "./dto/createTeacher.dto";
import * as bcrypt from "bcrypt";
import sgMail = require("@sendgrid/mail");

function GeneratePassword() {
  const length = 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let retVal = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function SendEmail(Email: string, Password: string) {
  const link_img = "https://i.postimg.cc/xCH6ng8z/Guy-computer.png";
  const message = {
    to: Email,
    from: "hardtinsa@gmail.com",
    subject: "Password to accesss your school account",
    text: "Welcome to the new management web application of our school!",
    html:
      '<img src="' +
      link_img +
      '" />' +
      "<h2>Bem-vindo<h2/>" +
      "<p>Start using the web application today!<p/>" +
      '<p>Your password: "' +
      Password +
      '" <p/>',
  };

  sgMail
    .send(message)
    .then((res) => {
      console.log("Email has been sent!");
    })
    .catch((error) => {
      console.log("Error: " + error);
    });
}

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  //Create user
  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      FName: CreateUserDto.FName,
      LName: CreateUserDto.LName,
      Email: CreateUserDto.Email,
      Password: CreateUserDto.Password,
      Birthday: CreateUserDto.Birthday,
      AccountType: CreateUserDto.AccountType,
    });
    const result = await newUser.save();
    return result;
  }

  //Create a student account
  async createStudent(createStudentDto: CreateStudentDto): Promise<User> {
    const pass = GeneratePassword();
    const newUser = new this.userModel({
      FName: createStudentDto.FName,
      LName: createStudentDto.LName,
      Email: createStudentDto.Email,
      MyClasses: createStudentDto.MyClasses,
      Status: true,
      Registered: true,
      AccountType: "62f38d97cafa8d86f57141c5",
      Password: await bcrypt.hash(pass, 10),
    });
    const result = await newUser.save();
    if (result) {
      SendEmail(createStudentDto.Email, pass);
    }
    return result;
  }

  //create a teacher account
  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<User> {
    const newUser = new this.userModel({
      FName: createTeacherDto.FName,
      LName: createTeacherDto.LName,
      Email: createTeacherDto.Email,
      MyClasses: createTeacherDto.MyClasses,
      Password: await bcrypt.hash(createTeacherDto.Password, 10),
      Birthday: createTeacherDto.Birthday,
      AccountType: "62f38d8ccafa8d86f57141c3",
    });
    const result = await newUser.save();
    return result;
  }

  //Get user by id
  async getUser(_id: string): Promise<User> {
    const user = this.userModel.findById(_id).select("-Password -MyClasses");
    if (user) {
      return user;
    } else {
      throw new NotFoundException("User not found!");
    }
  }

  //Get all users
  async getUsers(): Promise<User[]> {
    const users = await this.userModel.find({});
    if (users) {
      return users;
    } else {
      throw new NotFoundException("No users found!");
    }
  }

  //Get teachers
  async getTeachers(): Promise<User[]> {
    const teachers = await this.userModel.find({
      Status: true,
      Registered: true,
      AccountType: "62f38d8ccafa8d86f57141c3",
    });
    if (teachers) {
      return teachers;
    } else {
      throw new NotFoundException("There are no teachers!");
    }
  }

  //Get students
  async getStudents(): Promise<User[]> {
    const students = await this.userModel.find({
      AccountType: "62f38d97cafa8d86f57141c5",
    });
    if (students) {
      return students;
    } else {
      throw new NotFoundException("There are no students!");
    }
  }

  //Get students with active status
  async getActiveStudents(): Promise<User[]> {
    const result = await this.userModel.find({
      Status: true,
      AccountType: "62f38d97cafa8d86f57141c5",
    });
    if (result) {
      return result;
    } else {
      throw new NotFoundException("No students found!");
    }
  }

  //Get students with disabled status
  async getDisabledStudents(): Promise<User[]> {
    const result = await this.userModel.find({
      Status: false,
      Registered: true,
      AccountType: "62f38d97cafa8d86f57141c5",
    });
    if (result) {
      return result;
    } else {
      throw new NotFoundException("No students found!");
    }
  }

  //Get teachers with disabled status
  async getDisabledTeachers(): Promise<User[]> {
    const result = await this.userModel.find({
      Status: false,
      Registered: true,
      AccountType: "62f38d8ccafa8d86f57141c3",
    });
    if (result) {
      return result;
    } else {
      throw new NotFoundException("No teachers found!");
    }
  }

  //Get unregistered teachers
  async getRequests(): Promise<User[]> {
    const requests = await this.userModel.find({
      Status: false,
      Registered: false,
      AccountType: "62f38d8ccafa8d86f57141c3",
    });
    if (requests) {
      return requests;
    } else {
      throw new NotFoundException("No requests yet!");
    }
  }

  //Update user
  async updateUser(_id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(
      { _id: _id },
      {
        FName: updateUserDto.FName,
        LName: updateUserDto.LName,
        ProfilePicture: updateUserDto.ProfilePicture,
        Birthday: updateUserDto.Birthday,
        Password: await bcrypt.hash(updateUserDto.Password, 10),
      }
    );
    return user;
  }

  //Disable user
  async disableUser(_id: string) {
    await this.userModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        Status: false,
      }
    );
    return;
  }

  //Accept registration
  async acceptTeacher(_id: string) {
    await this.userModel.findByIdAndUpdate(
      {
        _id: _id,
      },
      {
        Status: true,
        Registered: true,
      }
    );
  }

  //Decline teacher registration
  async declineTeacher(_id: string) {
    await this.userModel.deleteOne({ _id: _id });
    return;
  }

  //Assignable students
  async assignableStudents(_id: ObjectId) {
    const students = await this.userModel.find({
      AccountType: "62f38d97cafa8d86f57141c5",
      Status: true,
      Registered: true,
    });
    var assignable_students = [];
    if (students.length > 0) {
      for (const student of students) {
        if (!student.MyClasses?.includes(_id)) {
          assignable_students.push(student);
        }
      }
    } else {
      return new NotFoundException("No students are assignable to this class!");
    }
    return assignable_students;
  }

  //Assignable teachers
  async assignableTeachers(_id: ObjectId) {
    const teachers = await this.userModel.find({
      AccountType: "62f38d8ccafa8d86f57141c3",
      Status: true,
      Registered: true,
    });
    var assignable_teachers = [];
    if (teachers.length > 0) {
      for (const teacher of teachers) {
        if (!teacher.MyClasses?.includes(_id)) {
          assignable_teachers.push(teacher);
        }
      }
    } else {
      return new NotFoundException(
        "No teachers are assignable for this class!"
      );
    }
    return assignable_teachers;
  }

  //Find by email
  async findByEmail(email: string) {
    const result = await this.userModel.findOne({
      Email: email,
    });
    if (result) {
      const user = result;
      return {
        _id: user._id,
        FName: user.FName,
        LName: user.LName,
        AccountType: user.AccountType,
        Status: user.Status,
        Registered: user.Registered,
        Password: user.Password,
      };
    } else {
      return null;
    }
  }

  async getId(email: string) {
    const result = await this.userModel.findOne({ Email: email });
    if (result) {
      return {
        _id: result._id,
        FName: result.FName,
        LName: result.LName,
        AccountType: result.AccountType,
      };
    } else {
      return null;
    }
  }

  //add a class to my classes
  async addToMyClasses(_id: ObjectId, classId: ObjectId) {
    await this.userModel.findOneAndUpdate(
      { _id: _id },
      {
        $push: {
          MyClasses: classId,
        },
      }
    );
  }

  //remove a class from my classes
  async removeFromMyClasses(_id: ObjectId, classId: ObjectId) {
    await this.userModel.findOneAndUpdate(
      { _id: _id },
      {
        $pull: { MyClasses: classId },
      }
    );
  }

  //get my classes
  async getMyClasses(_id: ObjectId) {
    return await this.userModel
      .findById(_id)
      .select("MyClasses -_id")
      .populate({
        path: "MyClasses",
        select: "_id HeadTeacher",
        populate: {
          path: "HeadTeacher",
          select: "FName LName _id",
          model: "User",
        },
      })
      .populate({
        path: "MyClasses",
        select: "Subject Status ClassName",
        populate: {
          path: "Subject",
          select: "_id Description",
          model: "Subject",
        },
      })
      .exec();
  }

  //get profile pic
  async getProfilePic(_id: ObjectId) {
    return await this.userModel.findById(_id).select("ProfilePicture FName LName");
  }
}
