import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Item {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;
}

@Schema()
export class Category extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ type: [Item], default: [] })
  items: Item[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
