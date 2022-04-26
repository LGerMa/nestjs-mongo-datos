import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Brand } from './brand.entity';

import { SubDoc, SubDocSchema } from './sub-doc.entity';

@Schema()
export class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Number, index: true })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop()
  image: string;

  //version old
  // @Prop(
  //   raw({
  //     name: { type: String },
  //     image: { type: String },
  //   }),
  // )
  // category: Record<string, any>;

  @Prop({ type: SubDocSchema })
  category: SubDoc;

  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

//indexación compuesta
ProductSchema.index({ price: 1, stock: -1 });
