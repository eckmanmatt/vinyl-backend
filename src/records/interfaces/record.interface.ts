import { Document } from 'mongoose';

export interface Record extends Document {
  readonly title: string;
  readonly author: string;
  readonly year: number;
  readonly cover: string;
}
