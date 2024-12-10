import {Product} from './product-model'
import {createProductDto, UpdateProductDto, FindProductDto} from '../dto/product-dto'
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const addProduct = (product: createProductDto): Product => {

  const newProduct = {
    ...product,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category:{
      id: product.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    }
  }
  products.push(newProduct);
  return newProduct;
}; // En este archivo se importa la interfaz Product y el tipo Sizes del archivo product-model.ts, se crea un array de productos y se exporta una función que recibe un producto y lo agrega al array de productos.
import { Category } from '../interfaces/category-model';

export const getProducts = () => {
  return products;
} // Se exporta una función que retorna el array de productos.

export const getProduct = (id: number | string) => {
  return products.find(product => product.id === id);
} // Se exporta una función que recibe un id y retorna el producto que tenga el mismo id.

export const removeProduct = (id: number | string) => {
  const index = products.findIndex(product => product.id === id);
  products.splice(index, 1);
} // Se exporta una función que recibe un id, busca el índice del producto con el mismo id y lo elimina del array de productos.

export const updateProduct = (id: Product['id'], product: UpdateProductDto): Product => {
  const index = products.findIndex(product => product.id === id);
  products[index] = {
    ...products[index],
    ...product,
    updatedAt: faker.date.recent()
  }
  return products[index];
} // Se exporta una función que recibe un id y un producto, busca el índice del producto con el mismo id, actualiza los datos del producto y retorna el producto actualizado.

export const findProducts = (dto: FindProductDto): Product[] => {
  return products.filter(product => {
    return Object.keys(dto).every(key => {
      return dto[key as keyof FindProductDto] === product[key as keyof Product];
    });
  });
} // Se exporta una función que recibe un dto y retorna los productos que cumplan con las condiciones del dto.
