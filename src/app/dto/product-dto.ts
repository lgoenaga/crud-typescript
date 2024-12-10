import { Product } from "../products/product-model";

export interface createProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: number | string;
}

export interface UpdateProductDto extends Partial<createProductDto> {}

export interface FindProductDto extends Partial<Readonly<Product>> {}