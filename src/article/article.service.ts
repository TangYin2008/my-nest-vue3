import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}
  async getCategoryTree(): Promise<any> {
    // 获取所有顶级类别（没有父类别的类别）
    const topCategories = await this.prisma.articles.findMany({
      include: {
        // subCategories：子集的children名称
        subCategories: {
          include: {
            // products：子集的children名称
            products: true, // 这里可以根据需要包含更多的关联字段
          },
        },
      },
    });
    return {
      code: 200,
      msg: '请求成功',
      data: topCategories
    }
  }
}