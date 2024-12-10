const numbersVariable: number[] = [1, 2, 3, 4, 5];
numbersVariable.push(6);
numbersVariable.push(7);
numbersVariable.pop();
numbersVariable.unshift(0);

console.log(numbersVariable);

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// numbers.push(6); // Error
numbers.map((number) => number * 2);
console.log(numbers);
numbers.filter((number) => number > 2);
console.log(numbers);
numbers.reduce((acc, number) => acc + number, 0);