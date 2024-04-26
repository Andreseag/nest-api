import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities';

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

  finOne(id: number): Product {
    return this.products.find((product) => product.id === id);
  }

  create(payload: any): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
