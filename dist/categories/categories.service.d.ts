import { Model } from 'mongoose';
import { Category as CategorySchema } from 'src/schemas/category.schema';
import { Category } from './interfaces';
export declare class CategoriesService {
    private readonly categoryModel;
    constructor(categoryModel: Model<CategorySchema>);
    getCategoryById(id: string): Promise<CategorySchema>;
    createCategory(category: Category): Promise<CategorySchema>;
    getAllCategories(): Promise<CategorySchema[]>;
}
