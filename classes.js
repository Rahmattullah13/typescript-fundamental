"use strict";
// class not using constructor
// class Employee {
//   Id!: number;
//   name!: string;
//   address!: string;
// }
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_Id;
// let John = new Employee();
// John.Id = 1;
// John.name = 'John Smilga';
// John.address = 'San Fransisco';
// console.log(John);
// using constructor
class Employee {
    // getter and setter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_Id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_Id, id, "f");
    }
    // static member
    static getEmployeeCount() {
        return 50;
    }
    constructor(Id, name, address) {
        _Employee_Id.set(this, void 0); // member visibility can use keyword private/#
        __classPrivateFieldSet(this, _Employee_Id, Id, "f"); // private
        this.name = name;
        this.address = address;
    }
    // class method
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_Id = new WeakMap();
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
    constructor(id, name, address) {
        super(id, name, address);
    }
    // if we delete thid method this class will use the parent class
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let mike = new Manager(2, 'Mike', 'Microsoft');
let manager = mike.getNameWithAddress();
console.log(manager);
