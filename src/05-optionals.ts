export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number // Optional parameter with default value of undefined and last in the list
) => {
  return {
    id,
    stock: stock ?? 0, // If stock is undefined, it will be 0
    isNew: isNew ?? true, // If isNew is undefined, it will be true
  };
}

let product = createProduct('1', false, 10);
console.log(product); // { id: '1', stock: 10, isNew: false }
product = createProduct(1, false);
console.log(product); // { id: 1, stock: 0, isNew: false }
product = createProduct(1, undefined ,10);
console.log(product); // { id: 1, stock: 10, isNew: true }
product = createProduct('2');
console.log(product); // { id: '2', stock: 0, isNew: true }
product = createProduct(2, false, undefined);
console.log(product); // { id: 2, stock: 0, isNew: false }