import { Class } from 'src/models/Aula/class.schema';

export class CreateSummaryDto {
  Date: Date;
  Description: string;
  classId: Class;
}
