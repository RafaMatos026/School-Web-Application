import { Module } from '@nestjs/common';
import { AbsenceJustificationController } from './absence-justification.controller';
import { AbsenceJustificationService } from './absence-justification.service';

@Module({
  controllers: [AbsenceJustificationController],
  providers: [AbsenceJustificationService]
})
export class AbsenceJustificationModule {}
