import { IsNotEmpty } from 'class-validator';
import { ObjectId } from 'mongoose';

export class MarkPresenceDto {
  Present: boolean;

  @IsNotEmpty({ message: 'Presence must be marked for a class!' })
  classId: ObjectId;

  @IsNotEmpty({ message: 'Presence must be about a student!' })
  studentId: ObjectId;
}
