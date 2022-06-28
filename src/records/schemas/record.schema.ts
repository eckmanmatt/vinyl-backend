import * as mongoose from 'mongoose';

export const RecordModel = new mongoose.Schema({
  title: String,
  artist: String,
  year: Number,
  cover: String,
})
