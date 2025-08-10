
// array.map(functiion(element, index, array))

const users = [
    {name: "rama", age: 30},
    {name: "laxman", age: 20},
]

// get the names from array of objects

const names = users.map(user => user.name);

console.log(names)
console.log(users)


//user = {name: "rama", age: 30},
//user -> 2)  {name: "laxman", age: 20}
