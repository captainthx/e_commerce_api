import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, tb_products } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.tb_productsCreateInput) {
    return await this.prisma.tb_products.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.tb_products.findMany({
      include: { tb_category: true },
    });
  }

  async findOne(id: string) {
    return await this.prisma.tb_products.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(params: {
    where: Prisma.tb_productsWhereUniqueInput;
    data: Prisma.tb_productsUpdateInput;
  }): Promise<tb_products> {
    const { where, data } = params;
    return await this.prisma.tb_products.update({
      where,
      data,
    });
  }

  remove(id: string) {
    return this.prisma.tb_products.delete({
      where: {
        id: id,
      },
    });
  }
}
