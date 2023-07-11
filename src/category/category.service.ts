import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) { }

  async getCategories() {
    return await this.prismaService.category.findMany();
  }

  async createCategory(data: Prisma.CategoryCreateArgs) {
    return await this.prismaService.category.create(data);
  }
}
