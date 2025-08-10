// method tests wheter at lease one element in the array passes the given condition


let numbers = [1, 2, 3, 4];

let hasneg = numbers.some(num => num < 0);
console.log(hasneg);


let users = [
    {name: "venkat", age: 31},
    {name: "bob", age: 17},
    {name: "jack", age: 19}
];

let underAgePerson = users.some(user => user.age < 18);
console.log(underAgePerson)