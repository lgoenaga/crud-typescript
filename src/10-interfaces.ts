type Sizes = 'small' | 'medium' | 'large';

interface Pizza {
  name: string;
  sizes: Sizes;
  aditionalToppings?: string;
} // Las interfaces son una forma de definir la estructura de un objeto las cuales se pueden extender, implementar y heredar.

let pizza: Pizza[] = [];

pizza.push({ name: 'Margherita', sizes: 'small', aditionalToppings: 'mozzarella' });
pizza.push({ name: 'Quattro Formaggi', sizes: 'medium' });
pizza.push({
  name: 'Capricciosa',
  sizes: 'large',
  aditionalToppings: 'champiñones',
});

