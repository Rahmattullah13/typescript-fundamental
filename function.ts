function add(num1: number, num2: number) {
  return num1 + num2;
}

let jumlah: number = add(1, 3);

console.log(jumlah);

// arrow function
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(5, 3));

const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(3, 5));

// option parameter
function adds(num1: number, num2: number, num3?: number) {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(adds(4, 7));
console.log(adds(4, 7, 3));

// default value parameter
const subs = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(subs(50, 20)); // 30-num3(10)
console.log(subs(50, 20, 5)); // ini tidak menggunakan default value

// rest parameter
function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
console.log(add2(2, 3, 5, 6, 7, 8, 9));

console.log(add2(2, 3, ...[5, 3, 2]));

// generic function
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1, 2, 3, 4, 5]);

let concatString = getItems(['a', 'b', 'c', 'd', 'e']);

console.log(concatResult);
console.log(concatString);
