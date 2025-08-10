// sort method sorts the elements of the array and returns the sorted array...
// by default it sorts the element as the strings in ascending order

// let numbers = [2, 5, 1, 0, 9, 6];
// console.log(numbers.sort())

// let numbers = [2, 5, 1, 0, 10, 100, 500,50, 5, 200, 20, 9, 6];
// // console.log(numbers.sort()); //sort converts the numbers to strings and sorts by first digit

// let mobiles = ["oppo", "iphone", "bpl", "samusung"];
// console.log(mobiles.sort())

// compare function, when we sort the numbers, objects or aphanumeric values, we need to use the compare function

// array.sort((a, b) => a - b); //asc
//array.sort((a, b) => b - a); //dec

// rules in the compare function...

//in case a - b returns the negative ( < 0), a is placed before b (asc)
//in case a - b returns the positive ( > 0), b is placed before a (dec)
//in case a- b, returns 0, order remain unchanged

// let numbers = [2, 5, 1, 0, 10, 100, 500,50, 5, 200, 20, 9, 6];
// numbers.sort((a, b) => {
//     a - b;
// });
// console.log(numbers);


// sorting objects price (ascending...)

// let products = [
//     {name: "laptop", price: 2000},
//     {name: "phone", price: 100},
//     {name: "tablet", price: 10000},
// ];

// products.sort((a, b) => a.price - b.price);
// console.log(products)

