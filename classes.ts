// class not using constructor
// class Employee {
//   Id!: number;
//   name!: string;
//   address!: string;
// }

// let John = new Employee();

// John.Id = 1;
// John.name = 'John Smilga';
// John.address = 'San Fransisco';
// console.log(John);

// using constructor
class Employee {
  Id: number;
  name: string;
  address: string;

  constructor(Id: number, name: string, address: string) {
    this.Id = Id;
    this.name = name;
    this.address = address;
  }

  // class method
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let John = new Employee(1, 'John Smilga', 'San Fransisco');
// console.log(John);

let address = John.getNameWithAddress();
console.log(address);