
// // reduce method used to reduce all the elements into single value

// // array.reduce((accumulator, currentValue), initialvalue)


// //accumulator is the value which is returned after the last iteration
// //currentvalue is the current element being processed in the array
// //initialvalue -> initial accumulator values.., the the first element which is used

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue);

// console.log(sum)

// // 1) accumulator  = 0, currentvalue = 1 = 1 + 1  = 2
// // 2) 2 + 2 = 4
// // 3) 4 + 3 = 7
// // 4) 7 + 4 = 11
// // 5) 11 + 5 =  16


// //if you are not providing the initial value

// 1) accumulator = 1, currentvalue 2 =  1 + 2 = 3
// 2) 3, 3 = 6
// 3) 6, 4 = 10
// 4) 10, 5 = 15