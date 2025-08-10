// JSON(JAVASCRIPT OBJECT NOTATION) is the light weight data interchange format b/w client and server


//JSON is similar to javascript object but it is a string...

//json structure is a key-value pair structure..it supports array, strings, object...

// {
//     "name" : "venkat",
//     "age" : 30,
//     "trainer" : true,
//     "hobbies": {
//         "cricket",
//         "songs"
//     }
// }


// json is javascript...


// const jsonArray = [
//     {"id" : 1, "name" : "venkat"},
//     {"id" : 2, "name" : "ram"},
//     {"id" : 3, "name" : "jack"},
// ]

// // using foreach

// jsonArray.forEach(item => {
//     console.log(item.id + ": " + item.name)
// })


// methods to manipulate JSON in javascript..

// JSON.stringify(): converts the javascript object to JSON string

// JSON.parse(): converts the JSON string to a Javascript object


// const person = {
//     name: "venkat",
//     city: "bangalore"
// };
// const jsonString = JSON.stringify(person);
// console.log(jsonString)



const person = '{"name": "venkat"}';
const jsonObject = JSON.parse(person);
console.log(jsonObject)