// push() -> adds the element to the end of the array
// pop() -> removes the last element from the array
// shift() -> removes the first element from the array
// unshift() -> adds the element to the beginning of an array



// push method...addes or more elements to the end of the array and it will returns the new length of the array

// array.push(ele1, ele2...)


// let names = ["venkat", "ram"];
// console.log(names)
// console.log(names.length);  //initial legnth is 2
// names.push("lokesh"); //pushing the single element
// console.log(names);
// console.log(names.length); //lenght will update..new length
// names.push("kavaitha", "yokesh", "priya", "lida");
// console.log(names);


// let values = []; //empty array
// console.log(values)
// values.push("1", "2");
// console.log(values);


// pop method...removed the last element from an array and it returns the removed element

// array.pop()

// let names = ["venkat", "ram", "john", "jack"];
// let remove = names.pop();
// console.log(remove); //it will returns the removed element
// console.log(names);


let names = ["venkat", "ram", "john", "jack"];
names.push("something")
names.pop();
names.pop();
console.log(names);



// ****** imp interview
let emptyArray = [];
let removedItem = emptyArray.pop();
console.log(emptyArray); // []
console.log(removedItem);  //undefined
