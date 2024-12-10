import {addProduct, products, findProducts} from './products/product-service';
import {faker} from '@faker-js/faker';
// Assuming sizes is exported from product-constants


for (let i = 0; i < 50; i++) {

// Add a new product
addProduct({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  stock: faker.number.int({ min: 10, max: 100 }),
  price: parseFloat(faker.commerce.price({ min: 10000, max: 100000 })),
  color: faker.color.human(),
  image: faker.image.url(),
  sizes: faker.helpers.arrayElement(['s', 'm', 'l', 'xl']),
  tags: faker.helpers.shuffle(['new', 'sale', 'hot', 'limited']),
  categoryId: faker.string.uuid(),
});

}

//console.log(products);

// Find a product by id
const product = findProducts({
  sizes: 'm',
  color: 'black',
});
console.log('Product found: \n');
console.log(product); // En este archivo se importan las funciones addProduct y findProduct del archivo product-service.ts, se importa la función faker del paquete @faker-js/faker, se crea un bucle que agrega 50 productos al array de productos, se imprime el array de productos y se busca un producto por el tamaño 'm' e imprime el producto encontrado.

