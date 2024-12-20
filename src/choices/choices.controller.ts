import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChoicesService } from './choices.service';

@Controller('choices')
export class ChoicesController {
  constructor(private readonly choicesService: ChoicesService) {}

  @Post()
  saveChoice(
    @Body()
    data: {
      userId: string;
      category: string;
      choice: number;
      choiceName: string;
    },
  ) {
    return this.choicesService.saveChoice(
      data.userId,
      data.category,
      data.choice,
      data.choiceName,
    );
  }

  @Get('votes/:category')
  async getVotesByCategory(@Param('category') category: string) {
    return this.choicesService.getVotesByCategory(category);
  }

  @Get(':userId/:category')
  async getChoice(
    @Param('userId') userId: string,
    @Param('category') category: string,
  ) {
    const choice = await this.choicesService.getChoice(userId, category);
    if (!choice) {
      return { hasChosen: false };
    }

    return { hasChosen: true, choiceName: choice.choiceName };
  }

  @Get('votes')
  async getAllVotes() {
    return this.choicesService.getAllVotes();
  }
}
