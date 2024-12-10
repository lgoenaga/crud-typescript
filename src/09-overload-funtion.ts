// string => string[] if string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): number;

export function parseStr(input: unknown): unknown {
  if (typeof input === 'string') {
    return input.split('');
  } else if (Array.isArray(input)) {
  return input.join('');
  } else {
    return input;
  }
}
const result = parseStr('hello');
console.log(result); // ['h', 'e', 'l', 'l', 'o']
const result2 = result.reverse();
console.log(result2); // ['o', 'l', 'l', 'e', 'h'] // this is correct.
const result3 = parseStr(['h', 'e', 'l', 'l', 'o']).toUpperCase();
console.log(result3); // 'HELLO' // this is correct.
const result4 = parseStr(123);
result4.toFixed();
console.log(result4); // 123 // this is correct.
