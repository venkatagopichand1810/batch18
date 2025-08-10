// shift method removes the first element form the array and returns the removed element

// array.shift()

// let names = ["venkat", "ram", "john", "jack"];;
// let firstNameremove = names.shift();
// console.log(firstNameremove);



// unshift metods adds one or elements to the beginning of an array and returns the new length
// array.unshift(ele1, ele2....)


// let names = ["venkat", "ram", "john", "jack"];
// names.unshift("cena"); //adding the single element
// console.log(names);
// names.unshift("rob", "king");
// console.log(names);


// task queue


// intial task queue


let taskQueue = ["HTML task 1", "CSS task 2", "javascript task 3"];

console.log("initial task queue:", taskQueue);

// adding the task 
taskQueue.push("React Task 4")
console.log("after pushing", taskQueue);
// completed the last task 
let lastTask = taskQueue.pop();
console.log("Task completed", lastTask);
console.log("After completed", taskQueue);


// adding the new task at the beginning
taskQueue.unshift("production issue");
console.log(taskQueue)

taskQueue.shift();
console.log(taskQueue)


