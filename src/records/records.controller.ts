import { Controller, Post, Res, Body, HttpStatus, Get, Param, NotFoundException, Put, Query, Delete } from '@nestjs/common';
import { RecordService } from './records.service'
import { CreateRecordDTO } from './dto/create-record.dto'

@Controller('records')
export class RecordsController {
  constructor(private recordService: RecordService){ }

  @Post('/create')
  async addRecord(@Res() response, @Body() createRecordDTO:CreateRecordDTO){
    const record = await this.recordService.addRecord(createRecordDTO);
    return response.status(HttpStatus.OK).json({
      message: "Record has been successfully created",
      record
    })
  }

  @Get('records')
  async getAllRecords(@Res() response){
    const records = await this.recordService.getAllRecord();
    return response.status(HttpStatus.OK).json(records);
  }

  @Get('record/:recordId')
  async getRecord(@Res() response, @Param('recordId') recordId){
    const record = await this.recordService.getRecord(recordId);

    if(!record){
      throw new NotFoundException('Record does not exist!');
    }
    return response.status(HttpStatus.OK).json(record)
  }

  @Put('/update')
  async updateRecord(@Res() response, @Query('recordId') recordId, @Body() createRecordDTO){
    const record = await this.recordService.updateRecord(recordId, createRecordDTO);
    if(!record){
      throw new NotFoundException('Record does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message:'Record has been updated',
      record
    })
  }

  @Delete('/delete')
  async deleteRecord(@Res() response, @Query('recordId') recordId){
    const record = await this.recordService.deleteRecord(recordId);

    if(!record){
      throw new NotFoundException('Record does not exist!');
    }
    return response.status(HttpStatus.OK).json({
      message:'Record has been deleted',
      record
    })
  }
}
