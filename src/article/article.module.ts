import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { PrismaModule } from '../prisma/prisma.module';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [PrismaModule, WinstonModule],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
