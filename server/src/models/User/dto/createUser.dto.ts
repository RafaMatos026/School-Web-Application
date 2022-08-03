import { IsEmpty } from 'class-validator';
import { Subject } from 'src/models/Subject/subject.schema';

export class CreateUserDto {
  @IsEmpty({ message: 'First name cannot be empty!' })
  FName: string;

  LName: string;
  Email: string;
  Birthday: Date;
  AccountType: Subject;
  Password: string;
}
