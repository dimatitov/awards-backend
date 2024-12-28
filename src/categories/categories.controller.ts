import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoryDto } from "./dtos/category.dto";
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";
import { categoryExamples } from "./swagger/swagger.examples";

@ApiTags("categories")
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(":id")
  @ApiOperation({ summary: "Получить категорию по ID" })
  @ApiParam({
    name: "id",
    description: "Идентификатор категории",
    example: "12345",
  })
  @ApiResponse({
    status: 200,
    description: "Категория найдена",
    schema: { example: categoryExamples.singleCategory },
  })
  async getCategoryById(@Param("id") id: string) {
    return this.categoriesService.getCategoryById(id);
  }

  @Get()
  @ApiOperation({ summary: "Получить все категории" })
  @ApiResponse({
    status: 200,
    description: "Список категорий",
    schema: { example: categoryExamples.allCategories },
  })
  async getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Post()
  @ApiOperation({ summary: "Создать новую категорию" })
  @ApiResponse({
    status: 201,
    description: "Категория успешно создана",
    schema: { example: categoryExamples.newCategory },
  })
  async createCategory(@Body() createCategoryDto: CategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }
}
