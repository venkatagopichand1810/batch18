

//the following the traditional way to access the values from the given array using index numbers

// const mobiles = ["LG", "OPPO", "VIVO"];

// const one = mobiles[0];
// const two = mobiles[1];
// const three = mobiles[2];

// console.log(one)
// console.log(two)
// console.log(three)


//  I WANTED TO ACCESS the values using index, the index will start from 0



// Array destructuring.......we can extract muliple values into single line

// const mobiles = ["LG", "OPPO", "VIVO"];

// const[one, two, three, four] = mobiles

// console.log(one)
// console.log(two)
// console.log(three)



// const numbers = [10, 20, 30];
// const first = numbers[0]; //10
// const venkat = numbers[2]; //30

const[first, , venkat] =  [10, 20, 30]

console.log(first, venkat)


// using we can add the default values with simple syntax

// const fruits = ["apple"];

// // const firstFruit = fruits[0];
// // const secondFruit = fruits[1] !== undefined ? fruits[1] : "banana"
// const[firstFruit, secondFruit = "banana"] = fruits


// console.log(firstFruit, secondFruit)



// // swap the variables
// let x = 1;
// let y = 2;

// //without destructuring
// // let temp = x; // temp = 1
// // x = y;  //x = 2
// // y = temp // y = 1

// //with destructuring
// [x, y] = [y, x]

// console.log(x, y); //2, 1

//in function return


//without destructuring
// function getUserInfo() {
//     return ["venkat", 30];
// }

// const userInfo = getUserInfo();
// const name = userInfo[0]; //venkat
// const age = userInfo[1]; //30
// console.log(name);
// console.log(age)

//with destructuring

// function getUserInfo() {
//     return ["venkat", 30];
// }

// const [name, age] = getUserInfo();
// console.log(name);
// console.log(age)


// // nested arrays
// const harshaa = [1, [2, 3]];

// // const first = nested[0]; //1
// // const second = nested[1][0]; //2
// // const third = nested[1][1]; //3

// const[first, [zuber, amulya]] = harshaa

// console.log(first, zuber, amulya)



// const users = [
//     ["venkat", 30],  //0
//     ["shiva", 10],
//     ["rama", 25],
// ];

// // for(let i = 0; i< users.length; i++){
// //     const name = users[i][0];
// //     const age = users[i][1];
// //     console.log(`${name} is ${age} years old`)
// // }
// for(const[name, age] of  users) {
//     console.log(`${name} is ${age} years old`) 
// }

