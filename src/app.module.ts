import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ChoicesModule } from './choices/choices.module';
import { MONGO_DB_PATH } from './constants';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB_PATH),
    AuthModule,
    CategoriesModule,
    ChoicesModule,
    UserModule,
  ],
})
export class AppModule {}
