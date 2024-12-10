import { ROLES } from './01-enums';

const prices: (string | number)[] = [10,20,30];
prices.push('40');
console.log(prices);

let user: [string, ROLES];
user = ['admin', ROLES.ADMIN];
console.log(user); // [ 'admin', 'admin' ]
user = ['seller', ROLES.SELLER];
console.log(user); // [ 'seller', 'seller' ]