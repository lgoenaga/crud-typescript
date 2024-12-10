import {Category} from '../interfaces/category-model';
import {BaseModel} from '../interfaces/base-model';

export type Sizes = 's' | 'm' | 'l' | 'xl';

export interface Product extends BaseModel {
  name: string;
  description: string;
  stock: number;
  price: number;
  color: string;
  image: string;
  category: Category;
  tags?: string[];
  sizes?: Sizes;
}