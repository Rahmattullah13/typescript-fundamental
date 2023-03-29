let lname: string;

lname = 'Rifki Rahmattullah';

let newName = lname.toUpperCase();
console.log(newName);

// in Typescript when you assign different datatype you will get an error
// lname = 13
// Number datatype
let age: number = 23;

let dob = '23';

let result = parseInt(dob);

console.log(result);

// Boolean datatype
// in Typescript you will get an error when you not assign value to the variable, example like this :
// let isValid1: boolean;

let isValid2: boolean = true;
console.log(isValid2);

// Array in Typescript
let empList: string[];

empList = ['John', 'Smilga', 'Santosh'];

let emp = empList.find((empl) => empl === 'John');

console.log(empList);
console.log(emp);

let numList: Array<number>;

numList = [1, 2, 3, 4, 5];

let newNum = numList[2];

let results = numList.filter((num) => num > 2);

let results1 = numList.find((num) => num === 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(results1);
console.log(sum);

// Enum datatype
const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Blue;
console.log(c);

// Tuple datatype
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
console.log(swapNumbs);

// any datatype
// try to avoid using any! cause any is not giving an error when we assign different value in a variable.
let departement: any;
departement = 'IT';
departement = 10;
