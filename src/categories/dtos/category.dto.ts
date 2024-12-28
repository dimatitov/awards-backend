import { ApiProperty } from "@nestjs/swagger";

export class CategoryItemDto {
  @ApiProperty({ example: 1, description: "Идентификатор элемента категории" })
  id: number;

  @ApiProperty({
    example: "Smartphone",
    description: "Название элемента категории",
  })
  name: string;
}

export class CategoryDto {
  @ApiProperty({ example: "123", description: "Идентификатор категории" })
  id: string;

  @ApiProperty({ example: "Electronics", description: "Название категории" })
  name: string;

  @ApiProperty({
    type: [CategoryItemDto],
    description: "Список элементов категории",
  })
  items: CategoryItemDto[];
}
