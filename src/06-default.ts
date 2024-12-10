export const createProduct = (
  id: string | number,
  isNew: boolean = true, // Optional parameter with default value of true
  stock: number = 0 // Optional parameter with default value of undefined and last in the list
) => {
  return {
    id,
    stock,
    isNew,
  };
};

let product = createProduct('1', false, 10);
console.log(product); // { id: '1', stock: 10, isNew: false }
product = createProduct(1, false);
console.log(product); // { id: 1, stock: 0, isNew: false }
product = createProduct(1, undefined, 10);
console.log(product); // { id: 1, stock: 10, isNew: true }
product = createProduct('2');
console.log(product); // { id: '2', stock: 0, isNew: true }
product = createProduct(2, false, undefined);
console.log(product); // { id: 2, stock: 0, isNew: false }
