// string => string[] if string[] => string

function reverse(input: string | string[]): string | string[] {
  if (typeof input === 'string') {
    return input.split('');
  }
  return input.join('');
}
const result = reverse('hello');
console.log(result); // ['h', 'e', 'l', 'l', 'o']
const result2 = reverse(['h', 'e', 'l', 'l', 'o']);
console.log(result2); // 'helo' // this is incorrect, it should be 'olleh'

