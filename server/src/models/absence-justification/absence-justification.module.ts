import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AbsenceJustificationController } from "./absence-justification.controller";
import {
  AbsenceJustification,
  AbsenceJustificationSchema,
} from "./absence-justification.schema";
import { AbsenceJustificationService } from "./absence-justification.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AbsenceJustification.name, schema: AbsenceJustificationSchema },
    ]),
  ],
  controllers: [AbsenceJustificationController],
  providers: [AbsenceJustificationService],
})
export class AbsenceJustificationModule {}
