import { Module } from '@nestjs/common';
import { ChoicesController } from './choices.controller';
import { ChoicesService } from './choices.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Choice, ChoiceSchema } from '../schemas/choice.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Choice.name, schema: ChoiceSchema }]),
  ],
  controllers: [ChoicesController],
  providers: [ChoicesService],
})
export class ChoicesModule {}
