import { Module } from "@nestjs/common";
import { EvaluationService } from "./evaluation.service";
import { EvaluationController } from "./evaluation.controller";
import { Evaluation, EvaluationSchema } from "./evaluation.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Evaluation.name, schema: EvaluationSchema },
    ]),
  ],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class EvaluationModule {}
