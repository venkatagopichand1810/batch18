// includes
//indexOf()
//join
//keys
//length
//tostring
//reduce

// includes method check if an array contains the specific element and returns true or false
// array.includes(element, startindex)


// let mobiles = ["lg", "oppo", "vivo", "Iphone"];
// console.log(mobiles.includes("vivo")); //
// console.log(mobiles.includes("vivo", 5)); //


// indexof method returns the first index of an element in an array, ,,-1 if it is not found

// let mobiles = ["lg", "oppo", "vivo", "Iphone"];
// console.log(mobiles.indexOf("vivo"));
// console.log(mobiles.indexOf("vivo", 3));


// join method converts an array into a string using a separator...

// let greet = ["Hello", "Javascript"];
// console.log(greet);
// console.log(greet.join(" "))

// let data = ["venkat", "31", "trainer"];
// console.log(data.join(","))
// console.log(data.join("------****________"))


// keys method retruns an iterator containing the indexes of an array

// get the index from the array

// let mobiles = ["lg", "oppo", "vivo", "Iphone"];
// let keys = mobiles.keys();
// for(let key of keys) {
//     console.log(key)
// }

// let cartItems = ["lg", "oppo", "vivo", "Iphone"];

// for(let index of cartItems.keys()){
//     console.log(`Item ${index + 1} : ${cartItems[index]}`)
// }

// length property.. returns the number of elements in an array...

// let cartItems = ["lg", "oppo", "vivo", "Iphone"];
// // console.log(cartItems.length);
// for(let i = 0; i < cartItems.length; i++){
//     console.log(cartItems[i])
// }


// tostring()..methods used covert the comman separated string...

// let cartItems = ["lg", "oppo", "vivo", "Iphone"];
// let numbers = [1, 2, 3, 4, 5]
// console.log(cartItems.toString());
// console.log(numbers.toString())
// console.log(typeof numbers)
