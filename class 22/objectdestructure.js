
// const person = {name: 'rama', age: 25};

// const name = person.name;
// const age = person.age;
// console.log(name, age)



// const person = {name: 'rama', age: 25};

// const{name, age} = person;

// console.log(name, age)


//renaming varaibles

// const person = {name: "venkat"};
// const fullname = person.name;
// console.log(fullname)

// const person = {name: "venkat"};
// const{name: fullname} = person;
// console.log(fullname)

//setting the default values in object destructuring.

// const person = {name: "venkat"};
// // const name = person.name; //venkat
// // const age = person.age !== undefined ? person.age : 30;
// const {name: whatevername, age = 30} = person
// console.log(whatevername, age)


// nested object

// const user = {
//     name: "venkat",
//     profile: {
//         username: "venkatGopichand",
//         email: "venkat@gmail.com"
//     }
// }

// const name = user.name;
// const username = user.profile.username;
// const email = user.profile.email;
// const{name, profile: {username : whatevername, email}} = user
// console.log(name, whatevername, email);


// function paremeters

//without destructruing

// function greet(person){
//     console.log(`Hello, ${person.name}, you are ${person.age} living in city ${person.city} in country ${person.country} and address is ${person.address}`)
// }


// const person = {name: "rama", age: 30, city:"bangalore", country: "india", address: "123 bellandur"};
// greet(person)



// function greet({name, age, city, country, address}, {a, b, c, d, e}){
//     console.log(`Hello, ${name}, you are ${age} living in city ${city} in country ${country} and address is ${address}`)
//     console.log(`Hello, ${a}, you are ${b} living in city ${c} in country ${d} and address is ${e}`)
// }


// const person = [{name: "rama", age: 30, city:"bangalore", country: "india", address: "123 bellandur"}, ];
// const person2 = {a: "rama", b: 30, c:"bangalore", d: "india", e: "123 bellandur"};

// greet(person, person2)




// function person({name, age, city, country, address}){
//     console.log(`Hello, ${name}, you are ${age} living in city ${city} in country ${country} and address is ${address}`)
// }


// const persons = [
//     {name: "rama", age: 30, city:"bangalore", country: "india", address: "123 bellandur"},
//     {name: "venkat", age: 0, city:"chennai", country: "USA", address: "NYC"}


//  ];


//  persons.forEach(person)



// destructuring inside loops

// const people = [
//     {name: "venkat", age: 30},
//     {name: "rama", age: 20}
// ]

// // for(let i = 0; i< people.length; i++){
// //     const person = people[i];
// //     console.log(person.name, person.age)
// // }

// for(const{name, age} of people) {
//     console.log(name, age)
// }

//function return values


// function getUser() {
//     return { id: 1, name: "venkat", role: "mentor"}
// }

// // const user = getUser();
// // const id = user.id;
// // const name = user.name;
// // const role = user.role;
// const {id, name, role} = getUser()
// console.log(id, name, role)


// const config = {
//     app: {
//         settings: {
//             theme: "dark",
//             background:"white"
//         }
//     }
// };

// // const theme = config.app.settings.theme;
// // const bg = config.app.settings.background;
// const {app: {settings: {theme, background}}} = config
// console.log(theme, background);



async function fetchUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    // const data = await res.json();
    // const id = data.id;
    // const name = data.name;
    // const email = data.email;
    // const username = data.username;

    const {id, name, email, username} = await res.json()
    console.log(id, name, email, username)

}

fetchUser()