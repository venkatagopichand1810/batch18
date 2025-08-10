// findLast method returns the last element in an array that satisies the given condition

// if no element is found, undefined

let numbers = [7, 3, 20, 5, 18, 15];

let findFirst = numbers.findLast(num => num % 2 === 0); //finding the first even number

console.log(findFirst)


// finding the most recent user subscription 


let users = [
    {name: "venkat", subscription: false},
    {name: "ram", subscription: true},
    {name: "jack", subscription: false},
    {name: "john", subscription: true},

]

let lastSub = users.findLast(user => user.subscription);
console.log(lastSub)
