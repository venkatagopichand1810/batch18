// rest operator ... is used to collect muliple elements into a single array...in functions, array destructring, object destructring

//if we dont know how many value we may need to pass into function. rest opertaor


// function cart(a, b){
//     return a + b
// }

// console.log(cart(10, 30, 50, 100, 200)); //indefinit number of cart items we are adding

// arguments object

// function cart() {
//     let total = 0;
//     for(let i = 0; i<arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total
// }
// console.log(cart(10, 20))
// console.log(cart(10, 20, 30, 40, 50, 60, 70, 80, 90, 200))




// function cart(...numbers) {

//     return numbers.reduce((total, num) => total + num, 0)
// }
// console.log(cart(10, 20))
// console.log(cart(10, 20, 30, 40, 50, 60, 70, 80, 90, 200))



// const[one, two, ...three] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200 ];
// console.log(one);
// console.log(two);
// console.log(three);

// const user = {
//     name: "venkat",
//     age: 100,
//     city: "bangalore",
//     country: "india"
// }

// const name = user.name; //venkat
// const age = user.age; //
// const address = {
//     city: user.city,
//     country: user.country
// }

// console.log(name);
// console.log(age);
// console.log(address)

// const user = {
//     name: "venkat",
//     age: 100,
//     city: "bangalore",
//     country: "india",
//     streeName: "tata nagar"
// }


// const {name, age, ...address} = user
// console.log(name);
// console.log(age);
// console.log(address)

// spread expand the values, rest gathers value 



// const user = {id: 1, name: "venkat", age: 30, country: "india"};

// const id = user.id;
// const otherDetials = {
//     name: user.name,
//     age: user.age,
//     conuntry: user.country
// }
// console.log(id);
// console.log(otherDetials)


//rest + object destructruing

const user = {id: 1, name: "venkat", age: 30, country: "india"};
const{id, ...otherDetials} = user;
console.log(id);
console.log(otherDetials);
console.log(user)

