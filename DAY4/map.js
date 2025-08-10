// map method create the new array by applying the given function to each element of the original array

// returns the new array with the transformed values...does not modify the original array

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(num => num * 3);
console.log(double)