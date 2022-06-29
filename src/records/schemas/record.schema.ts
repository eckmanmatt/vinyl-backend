import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

@Schema()
export class Record {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  year: number;

  @Prop()
  cover: string;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
