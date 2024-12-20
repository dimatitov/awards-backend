import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category as CategorySchema } from 'src/schemas/category.schema';
import { Category } from './interfaces';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategorySchema.name)
    private readonly categoryModel: Model<CategorySchema>,
  ) {}

  async getCategoryById(id: string): Promise<CategorySchema> {
    return this.categoryModel.findById(id).exec();
  }

  async createCategory(category: Category): Promise<CategorySchema> {
    const newCategory = new this.categoryModel(category);
    return newCategory.save();
  }

  async getAllCategories(): Promise<CategorySchema[]> {
    return this.categoryModel.find().exec();
  }
}
