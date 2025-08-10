// Object.keys() returns the array of the objects 

// const person = {name: "venkat", city: "chennai"};

// Object.keys(person).forEach(key => {
//     console.log("key is :", key)
// })

// Object.values(person).forEach(value => {
//     console.log("value is: ", value)
// })

// Object.entries(person).forEach(([key, value]) => {
//     console.log(key, value)
// })


const user = {
    name: "venkat",
    age: 30
};

console.log(user.hasOwnProperty("name"))
console.log(user.hasOwnProperty("address"))