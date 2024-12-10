  import { Product } from '../products/product-model';
  import { User } from '../users/user-model';
  import {BaseModel} from '../interfaces/base-model';

  export interface Order extends BaseModel {
    product: Product[];
    user: User;
  }