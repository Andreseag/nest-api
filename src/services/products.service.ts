import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      stock: 100,
      image: 'https://i.imgur.com/u6c1G2F.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      stock: 200,
      image: 'https://i.imgur.com/u6c1G2F.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      stock: 300,
      image: 'https://i.imgur.com/u6c1G2F.jpg',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto): Product {
    const index = this.products.findIndex((product) => product.id === id);
    this.products[index] = {
      ...this.products[index],
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number): Product {
    const index = this.products.findIndex((product) => product.id === id);
    const product = this.products[index];
    this.products.splice(index, 1);
    return product;
  }
}
