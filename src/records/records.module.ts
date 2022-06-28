import { Module } from '@nestjs/common';
import { RecordModel } from './schemas/record.schema';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'Record', schema:RecordModel}])
  ],
  providers: [RecordsService],
  controllers: [RecordsController]
})
export class RecordsModule {}
