"use strict";
let { name: userName, email: userEmail } = { name: 'john', age: 23, id: 1, email: 'john@example.com' };
let employee = { name: 'John', age: 23, id: 1, email: 'john@example.com', salary: 1000 };
console.log(employee);
let [user1, user2, ...restUsers] = [
    { name: 'john', age: 23, id: 1, email: 'john@example.com' },
    { name: 'john1', age: 23, id: 2, email: 'john1@example.com' },
    { name: 'john2', age: 23, id: 3, email: 'john2@example.com' },
    { name: 'john3', age: 23, id: 4, email: 'john3@example.com' },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result2 = restUsers.filter(user => user.id === 3);
console.log(result2);
