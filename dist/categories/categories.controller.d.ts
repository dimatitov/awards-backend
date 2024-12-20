import { CategoriesService } from './categories.service';
import { Category } from './interfaces';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategoryById(id: string): Promise<import("../schemas/category.schema").Category>;
    getAllCategories(): Promise<import("../schemas/category.schema").Category[]>;
    createCategory(createCategoryDto: Category): Promise<import("../schemas/category.schema").Category>;
}
