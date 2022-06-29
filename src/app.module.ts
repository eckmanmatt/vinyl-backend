import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordModule } from './record/record.module';
import { RecordsModule } from './records/records.module';
import { RecordSchema } from './schemas/record.schema'
import { RecordController } from './record/record.controller';
import "dotenv/config";

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://meckman:strangerthings@cluster0.w6ien.mongodb.net/?retryWrites=true&w=majority',{dbName:'vinylviews'})],
  controllers: [AppController, RecordController],
  providers: [AppService],
})
export class AppModule {}
