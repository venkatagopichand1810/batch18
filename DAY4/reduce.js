// reduce method in javascript is used to iterate over an array and reduce it to a single value...

// array.reduce((accumulator, currentvalue) => (), initialvalue);

// accumulator..the accumulated value of the previoue iteration

//currentvalue..the current element of the array

//initialvalue...optional..,, then accumulator = initialvalue

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// 1) 0, 1  => 0 + 1 => 1

//2) 1, 2 => 1 + 2 => 3

//3) 3, 3 => 3 + 3 = 6

//4) 6, 4 => 6 + 4 = 10

//5) 10, 5 => 10 + 5 = 15

// const cart = [
//     {item: "laptop", price: 1000},
//     {item: "mouse", price: 2000},
//     {item: "keyboard", price: 3000}
// ];

// const totalPrice = cart.reduce((acc,product) => {
//     return acc + product.price;
// }, 0);

// console.log(`total price: $${totalPrice}`)