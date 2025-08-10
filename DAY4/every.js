// everymethod tests whether all elements in the array passes the provided test function
//returns true if all the elements pass the test, otherwise returns false



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.every(num => num % 2 === 0);
console.log(evenNumbers);


let numbers1 = [-1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let check = numbers1.every(num => num > 0);
console.log(check); 


let users = [
    {name: "venkat", age: 31},
    {name: "bob", age: 25},
    {name: "jack", age: 19}
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults)