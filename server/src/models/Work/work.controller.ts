import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Public } from 'src/auth/decorators/isPublic.decorator';
import { CreateWorkDto } from './createWork.dto';
import { WorkService } from './work.service';

@Controller('works')
export class WorkController {
  constructor(private readonly WorkService: WorkService) {}

  //Add work
  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../../../public/Documents/Works',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async createWork(
    @Body() data: CreateWorkDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'pdf',
        })
        .build({
          fileIsRequired: true,
        }),
    )
    file: Express.Multer.File,
  ) {
    return await this.WorkService.createWork(data);
  }

  //Get works submitted from a class
  @Public()
  @Get('getWork/:id')
  async getWork(@Param('id') classId: string) {
    return await this.WorkService.getClassWork(classId);
  }
}
