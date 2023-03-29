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
  #Id: number; // member visibility can use keyword private/#
  protected name: string;
  address: string;

  // getter and setter
  get empId(): number {
    return this.#Id;
  }

  set empId(id: number) {
    this.#Id = id;
  }

  // static member
  static getEmployeeCount(): number {
    return 50;
  }

  constructor(Id: number, name: string, address: string) {
    this.#Id = Id; // private
    this.name = name;
    this.address = address;
  }

  // class method
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}


Employee.getEmployeeCount();

let John = new Employee(1, 'John Smilga', 'San Fransisco');
// console.log(John);

// now we cannot access Id
// John.

// using getter and setter, now we can access id
John.empId = 100;
console.log(John.empId);


let address = John.getNameWithAddress();
console.log(address);

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  // if we delete thid method this class will use the parent class
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let mike = new Manager(2, 'Mike', 'Microsoft');
let manager = mike.getNameWithAddress();
console.log(manager);
