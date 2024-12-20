import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './interfaces';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return this.categoriesService.getCategoryById(id);
  }

  @Get()
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  async createCategory(
    @Body()
    createCategoryDto: Category,
  ) {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
