// spread operator in javascirpt is used to expand the elements like arrays, strings, objects into individual elements

// // ...(spread operator)
// const original = [1, 2, 3, 4, 5, 6];
// // const copy = original.slice();
// const copy = [...original]
// console.log(copy);


// const a = [1, 2, 3, 4, 5];
// const b = [6, 7, 8, 9, 19];
// // const merged = a.concat(b);
// const merged = [...a, ...b]
// console.log(merged)


// add the elements while copying

// const original = [1, 2, 3, 4, 5, 6];
// // const newArray = [0].concat(original).concat([7, 8, 9]);
// const newArray = [0, ...original, 7, 8, 9]
// console.log(newArray)


// copy the objects

// const obj = {name: "venkat", age: 30};
// // const copy = Object.assign({}, obj);
// const copy = {...obj}
// console.log(copy)



// const obj1 = {name: "venkat", age: 30};

// const obj2 = {name1: "sony", age1: 20};
// // const mergeObjects = Object.assign({}, obj1, obj2);
// const mergeObjects = {...obj1, ...obj2}

// console.log(mergeObjects)


// const name = "venkat";
// // const chars = name.split("");
// const chars = [...name]
// console.log(chars)

//["v", "e", "n"......]


// const settings = {
//     theme: "dark",
//     background: "black"
// }

// const updateSettings = {
//     ...settings, //this will gives the exsiting....
//     background: "white",
//     mobilecase: 5000

// }

// console.log(updateSettings)


// const cart = {
//     mobilephone: 220000,
//     case: 250
// }

// const updateCart = {
//     ...cart, //this will gives the exsiting....
//     geans: 700,
//     shoes: 5000

// }

// console.log(updateCart)


// let cart = [
//     {id: 1, name: "Shirt", price: 500},
//     {id: 2, name: "jeans", price: 1500},
// ];

//add the new item

// let newItem = {id: 3, name: "tshirt", price: 2500};

// cart = [...cart, newItem];

// newItem = {id: 3, name: "tshirt", price: 5500};

// console.log(cart)
// console.log(newItem)



//shallow copy......create a new object but nested objects/array are still referenced
//if we modify the nested object in the copy, the original will be affacted



//deep copy
//modification made in the copy will not affact the original , even it it i nested



// primitive data types( number, stirng ,boolean unfined, null) ...copy by value


//copy by value
// let a = 10; ///a holds the value 10
// let b = a; // b get the copy of value (10)

// b = 20; //change b to 20

// console.log(a); //10
// console.log(b); //20


// let name1 = "venkat";
// let name2 = "amulya";

// name2 = "harshaaaa";

// console.log(name1)
// console.log(name2)



// copy by reference.... non primitive (array, object, regex, set, map)
//when we assign the non primitive value to another variable, both variables will refer to the same memory location..
//changing one affects the other

//deep copy
// let person1 = {name: "venkat"};
// let person2 = person1;  // person2 refences the same object

// person2.name = "rama"; //modifying her
// console.log(person1.name);
// console.log(person2.name);


// //shallow copy
// let person1 = {name: "venkat"};
// let person2 = {...person1};  // person2 refences the same object

// person2.name = "rama"; //modifying her
// console.log(person1.name); //venkat
// console.log(person2.name); //rama


// const original = {
//     name: "venkatesh",
//     address: {
//         city: "hyderabad",
//         zip: 500001
//     }
// }

// const shallowCopy = {...original}
// shallowCopy.name = "venkat";
// shallowCopy.address.city = "bangalore"
// console.log(shallowCopy);
// console.log(original);
// const deepCopy = JSON.parse(JSON.stringify(original))
// const deepCopy = structuredClone(original)
// deepCopy.address.city = "bangalore"
// console.log(original.address.city);
// console.log(deepCopy.address.city);
// console.log(shallowCopy.name);
// console.log(original.name);

