import { Controller, Get, Inject, LoggerService, Query, Res } from '@nestjs/common';
import { ArticleService } from './article.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller('article')
export class ArticleController {
    constructor(private ArticleService: ArticleService, private prisma: PrismaService,@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService){
        this.ArticleService = ArticleService;
    }
    @Get('/list')
        async getCategoryTree() {
            const data = await this.ArticleService.getCategoryTree();
            return data
        }
}
