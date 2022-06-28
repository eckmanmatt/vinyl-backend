import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordModule } from './record/record.module';
import { RecordsModule } from './records/records.module';
import { RecordController } from './record/record.controller';
import "dotenv/config";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI,
      {
        useNewUrlParser:true
      }),
    RecordModule,
    RecordsModule
],
  controllers: [AppController, RecordController],
  providers: [AppService],
})
export class AppModule {}
