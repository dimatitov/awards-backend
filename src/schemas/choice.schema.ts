import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Choice extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  choice: number;

  @Prop({ required: true })
  choiceName: string;
}

export const ChoiceSchema = SchemaFactory.createForClass(Choice);
