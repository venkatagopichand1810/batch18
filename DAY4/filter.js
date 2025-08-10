// method used to process and mantipulate the arrays
// filter method creates the new array with the elements that pass the given condition
// filter the even numbers

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);



let users = [
    {id: 1, name: "ram", age: 15},
    {id: 2, name: "jack", age: 30},
    {id: 3, name: "venkat", age: 31}
];


let adults = users.filter(user => user.age >=18);
console.log(adults)



let products = [
    {id: 100, name: "laptop", price: 500, stock: 10}, 
    {id: 101, name: "ac", price: 200, stock: 0},
    {id: 102, name: "washing machine", price: 100, stock: 100}
]

let cheapProducts = products.filter(product => product.price < 200);
console.log(cheapProducts)



let usersdata = [
    {id: 1, name: "ram", status: "active"},
    {id: 2, name: "jack", status: "inactive"},
    {id: 3, name: "venkat", status: "active"}
];

let activeUsers = usersdata.filter(user => user.status === "active");
console.log(activeUsers)
