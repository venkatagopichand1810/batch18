// javascript find methods:::if wanted to search the elements in the array based on the given condition we can use find()

// find()... method returns the first element in the array that satisfies the given condition, if no element is found.. it returns "undefined"



let numbers = [5, 10, 20, 30, 40, 50];

let findFirst = numbers.find(num => num >40 ); //finding the first even number

console.log(findFirst)


let users = [
    {id: 1, name: "ram"},
    {id: 2, name: "jack"},
    {id: 3, name: "venkat"}
];

let user = users.find(user => user.id === 2);
console.log(user);


let values = [7, 3, 20, 5, 18, 15];

let largeNumber = values.find(value => value > 15);
console.log(largeNumber)


let products = [
    {id: 100, name: "laptop", price: 15000}, 
    {id: 101, name: "ac", price: 20000},
    {id: 102, name: "washing machine", price: 50000}

]

let selectedProduct = products.find(product => product.id === 102);
console.log(selectedProduct)