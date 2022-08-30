"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./user.schema");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const sgMail = require("@sendgrid/mail");
function GeneratePassword() {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
function SendEmail(Email, Password) {
    const link_img = "https://i.postimg.cc/xCH6ng8z/Guy-computer.png";
    const message = {
        to: Email,
        from: "hardtinsa@gmail.com",
        subject: "Password to accesss your school account",
        text: "Welcome to the new management web application of our school!",
        html: '<img src="' +
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
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }
    async createUser(CreateUserDto) {
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
    async createStudent(createStudentDto) {
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
    async createTeacher(createTeacherDto) {
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
    async getUser(_id) {
        const user = this.userModel.findById(_id).select("-Password -MyClasses");
        if (user) {
            return user;
        }
        else {
            throw new common_1.NotFoundException("User not found!");
        }
    }
    async getUsers() {
        const users = await this.userModel.find({});
        if (users) {
            return users;
        }
        else {
            throw new common_1.NotFoundException("No users found!");
        }
    }
    async getTeachers() {
        const teachers = await this.userModel.find({
            Status: true,
            Registered: true,
            AccountType: "62f38d8ccafa8d86f57141c3",
        });
        if (teachers) {
            return teachers;
        }
        else {
            throw new common_1.NotFoundException("There are no teachers!");
        }
    }
    async getStudents() {
        const students = await this.userModel.find({
            AccountType: "62f38d97cafa8d86f57141c5",
        });
        if (students) {
            return students;
        }
        else {
            throw new common_1.NotFoundException("There are no students!");
        }
    }
    async getActiveStudents() {
        const result = await this.userModel.find({
            Status: true,
            AccountType: "62f38d97cafa8d86f57141c5",
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException("No students found!");
        }
    }
    async getDisabledStudents() {
        const result = await this.userModel.find({
            Status: false,
            Registered: true,
            AccountType: "62f38d97cafa8d86f57141c5",
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException("No students found!");
        }
    }
    async getDisabledTeachers() {
        const result = await this.userModel.find({
            Status: false,
            Registered: true,
            AccountType: "62f38d8ccafa8d86f57141c3",
        });
        if (result) {
            return result;
        }
        else {
            throw new common_1.NotFoundException("No teachers found!");
        }
    }
    async getRequests() {
        const requests = await this.userModel.find({
            Status: false,
            Registered: false,
            AccountType: "62f38d8ccafa8d86f57141c3",
        });
        if (requests) {
            return requests;
        }
        else {
            throw new common_1.NotFoundException("No requests yet!");
        }
    }
    async updateUser(_id, updateUserDto) {
        const user = await this.userModel.findByIdAndUpdate({ _id: _id }, {
            FName: updateUserDto.FName,
            LName: updateUserDto.LName,
            ProfilePicture: updateUserDto.ProfilePicture,
            Birthday: updateUserDto.Birthday,
            Password: await bcrypt.hash(updateUserDto.Password, 10),
        });
        return user;
    }
    async disableUser(_id) {
        await this.userModel.findByIdAndUpdate({
            _id: _id,
        }, {
            Status: false,
        });
        return;
    }
    async acceptTeacher(_id) {
        await this.userModel.findByIdAndUpdate({
            _id: _id,
        }, {
            Status: true,
            Registered: true,
        });
    }
    async declineTeacher(_id) {
        await this.userModel.deleteOne({ _id: _id });
        return;
    }
    async assignableStudents(_id) {
        var _a;
        const students = await this.userModel.find({
            AccountType: "62f38d97cafa8d86f57141c5",
            Status: true,
            Registered: true,
        });
        var assignable_students = [];
        if (students.length > 0) {
            for (const student of students) {
                if (!((_a = student.MyClasses) === null || _a === void 0 ? void 0 : _a.includes(_id))) {
                    assignable_students.push(student);
                }
            }
        }
        else {
            return new common_1.NotFoundException("No students are assignable to this class!");
        }
        return assignable_students;
    }
    async assignableTeachers(_id) {
        var _a;
        const teachers = await this.userModel.find({
            AccountType: "62f38d8ccafa8d86f57141c3",
            Status: true,
            Registered: true,
        });
        var assignable_teachers = [];
        if (teachers.length > 0) {
            for (const teacher of teachers) {
                if (!((_a = teacher.MyClasses) === null || _a === void 0 ? void 0 : _a.includes(_id))) {
                    assignable_teachers.push(teacher);
                }
            }
        }
        else {
            return new common_1.NotFoundException("No teachers are assignable for this class!");
        }
        return assignable_teachers;
    }
    async findByEmail(email) {
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
        }
        else {
            return null;
        }
    }
    async getId(email) {
        const result = await this.userModel.findOne({ Email: email });
        if (result) {
            return {
                _id: result._id,
                FName: result.FName,
                LName: result.LName,
                AccountType: result.AccountType,
            };
        }
        else {
            return null;
        }
    }
    async addToMyClasses(_id, classId) {
        await this.userModel.findOneAndUpdate({ _id: _id }, {
            $push: {
                MyClasses: classId,
            },
        });
    }
    async removeFromMyClasses(_id, classId) {
        await this.userModel.findOneAndUpdate({ _id: _id }, {
            $pull: { MyClasses: classId },
        });
    }
    async getMyClasses(_id) {
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
    async getProfilePic(_id) {
        return await this.userModel.findById(_id).select("ProfilePicture FName LName");
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map