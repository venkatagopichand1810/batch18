// findexindex method returns the index of the first element that satisfies the condition 

// if no element is found, it returns -1

// let numbers = [7, 3, 3, 5, 7, 13];

// let findFirst = numbers.findIndex(num => num % 2 === 0); //finding the first even number

// console.log(findFirst)


// let users = [
//     {id: 1, name: "ram"},
//     {id: 2, name: "jack"},
//     {id: 3, name: "venkat"}
// ];

// let user = users.findIndex(user => user.id === 2);
// console.log(user);



// finding the first out of stock 

let products = [
    {id: 100, name: "laptop", price: 15000, stock: 10}, 
    {id: 101, name: "ac", price: 20000, stock: 0},
    {id: 102, name: "washing machine", price: 50000, stock: 100}

]

let outofStock = products.findIndex(prodcut => prodcut.stock === 0);

console.log(outofStock)