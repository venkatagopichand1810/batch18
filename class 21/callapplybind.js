
// function lunched(state, country){
//     console.log( `${this.name} is first launched in ${state}, ${country}`)
// }

// const mobile = {
//     name: "iphone"
// }

// // lunched.call(mobile, "india", "banglore")

// // lunched.apply(mobile, ["india", "banglore"])

// const binding = lunched.bind(mobile, "india", "banglore")
// binding();

// // call method is used to invoke a function immediately, while explicity setthing the "this" value and pass the arguments


// const person1 = {
//     name: "harshaaaa",
//     greet: function(age){
//         console.log(`hi ${this.name} and ${age}`)
//     }
// }

// const person2 = {
//     name: "venkat"
// }

// // reuse the person1 greet method

// person1.greet.call(person2, 22)

// const student1 = {
//     fullname: "harshaaaa",
//     welcome : function(course, year){
//         console.log(`${this.fullname}, taking ${course} in this ${year}`)
//     }
// }

// const student2 = {
//     fullname: "amulya"
// }

// // apply with array of argments
// student1.welcome.apply(student2, ["Mern stack", "2025"])


// bind..to fix "this" problem

// const user = {
//     username: "venkat",
//     welcome: function() {
//         console.log(`logged in as ${this.username}`)
//     }
// }

// const showUser = user.welcome.bind(user);
// setTimeout(showUser,5000)



// function greet(greeting, name){
//     console.log(`${greeting}, ${name}`)
// }

// const sayHello = greet.bind(null, "hello")

// sayHello("venkat")
// sayHello("rama")

// hello venkat
// hello rama


// const user = {
//     username : "user1234",
//     show : function() {
//         console.log(`logged in as ${this.username}`)
//     }
// };

// const showUser = user.show.bind(user); //user object...not the window object


// setTimeout(function() {
//     user.show()
// }); ///setTimout is the window object

//bind(user)..nakes this.username always refers to user.username, even if it is inside the window object,,settimout





// user.show..setTimeout....it loses the origianl context(user)..here this refers to global object window object



// function add(a, b) {
//     return a + b
// }

// setTimeout(() => {
//     console.log(add(100, 200))
// }, 500);


// function showname() {
//     console.log(this.name)
// }

// window.name = "venkat"
// const show = showname.bind(window);
// show()

//resuing the methods with differet users

function sayHello() {
    console.log(`hello, ${this.username}`)
}

const user1 = {username: "venkat"};

const user2 = {username: "rama"};

const sayhitovenkat = sayHello.bind(user1);
const sayhitorama = sayHello.bind(user2);

sayhitovenkat()
sayhitorama()

