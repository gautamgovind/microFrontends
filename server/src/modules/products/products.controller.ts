import { Controller, Get, Param } from '@nestjs/common';

import products, { ProductsInterface } from '../../Products';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Get()
  async index(): Promise<ProductsInterface[]> {
    return products;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<ProductsInterface> {
    return products.find(product => product.id === parseInt(id));
  }
}
