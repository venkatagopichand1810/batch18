// filter method is used to create the new array with the only the elements that satisfy the given conditon

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers)