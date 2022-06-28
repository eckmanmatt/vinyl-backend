import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Record } from './interfaces/record.interface';
import { CreateRecordDTO } from './dto/create-record.dto';


@Injectable()
export class RecordsService {
  constructor(@InjectModel('Record') private readonly recordModel: Model<Record>){}

  async addRecord(createRecordDTO: CreateRecordDTO):Promise<Record>{
    const record = await this.recordModel(createRecordDTO);
    return record.save();
  }
  async getAllRecord(): Promise<Record[]>{
    const records = await this.recordModel.find().exec();
    return records;
  }
  async getRecord(recordId): Promise<Record>{
    const record = await this.recordModel.findById(recordId);
    return record;
  }
  async updateRecord(recordId, createRecordDTO: CreateRecordDTO): Promise<Record>{
    const updatedRecord = await this.recordModel.findByIdAndUpdate(recordId,createRecordDTO, {new:true});
    return updatedRecord;
  }
  async deleteRecord(recordId): Promise<any>{
    const deletedEntry = await this.recordModel.findByIdAndRemove(recordID);
    return deletedEntry;
  }
}
