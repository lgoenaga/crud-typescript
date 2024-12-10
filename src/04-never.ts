const withoutEnd = () => {
  throw new Error('This function never ends');
}

const example = (input: unknown): unknown => {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (Array.isArray(input)) {
    return input.map((item) => example(item));
  }
  return withoutEnd();
}

console.log(example('Hello')); // HELLO
console.log(example(['Hello', 'World'])); // [ 'HELLO', 'WORLD' ]
console.log(example(true)); // Error: This function never ends
