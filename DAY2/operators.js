// let a = 10;
// let b = 20;

// let a = 30, b = 10;

// console.log(a + b)
// console.log(a - b); 
// console.log(a * b); 
// console.log(a / b); //quotient
// console.log(a % b); //reminder
// console.log(a ** b);

// let num = 10;
// console.log(++num)// pre increment operator
// console.log(num++); //post increment operator
// console.log(num++)

// console.log(+num); //will converts to number
// console.log(-num); //negates the value



// assginment operators

// let x = 5; //assgining the value

// addition assinment operator... add and assign +=

// let b = 10; 

// b += 20 // b = b + 20; 
// b -= 5
// console.log(b);


// console.log(5 == "5") //equal to ....it willl check the value..true

// console.log(5 === "5"); //both value and type

// console.log(5 != 4); //not equal operator

// console.log(5 !== '5'); //strict not equal operator ..true

// console.log( 5 > 4);//true
// console.log( 5 <  4) //false
// console.log( 5 >= 5)//true
// console.log( 5 <= 5) //true
// console.log( 5 >= 5) //true


// logcial operators....

// && Logical AND..false it will be false

// let a = true;
// let b = true;
// console.log(a && b); //true

// let a = false;
// let b = true;
// console.log(a && b); //false


// let a = true;
// let b = false;
// console.log(a && b); //false

// let a = false
// let b = false;
// console.log(a && b); //false

// logical OR operator...
// let a = false;
// let b = false;
// console.log( a || b); //false

// let a = true;
// let b = false;
// console.log( a || b); //true

// let a = false;
// let b = true;
// console.log( a || b); //true

// let a = true;
// let b = true;
// console.log( a || b); //true


// logical not operator...

// let a = true;
// console.log(!a); //false

// let a = false;
// console.log(!a); //true


// string operators... strring manuipulation

// let greeting = "hello";

// let name = "venkat";

// console.log(greeting + ", " + name)

// // typeof operators

// let fName = "venkataaa"
// console.log(typeof fName);


// instancOf operator...checks the instance...


// console.log([1, 2, 3] instanceof Array);
//  ram
// console.log(value ?? "venkat"); /

// let arr = new Array()


// bitwise operator...we are going to check the binary
//bitwise AND
//bitwise OR
//bitwise XOR
//bitwise NOT
//left shift
//right shift


// let a = 13; // i wanted to convert to binary

// console.log(5 & 1); //0101 & 0001


// let a = 10;
// if(a > 5) {
//     console.log("yes it is")
// } else {
//     console.log("no")
// }

// shortand of if else is ternary operator....

//condition ? "exp1" : "exp2"

// let age = 16; //false condition
// let access = (age > 18) ? "Allowed" : "not allowed";
// console.log(access);


// let age = 28; //true condition
// let access = (age > 18) ? "Allowed" : "not allowed";
// console.log(access);


// true first condition will execute
// false second contiion will execute

//nullish coalescing (??) ..it is going to returns the right hand value if the left hand value is null or undefined...


// let value = null;
// let something = value ?? "venkat";
// console.log(something);

// value = "ram"; //changing null to/value is present..it will give the left hand side value...


// optional chaining (?.).......allows us to safely access the deep nested object propeties..

//json..



//positive true ...properties are present

// let user = {
//     address: {
//         city: "chennai"
//     }
// };
// console.log(user.address.city);

let user = {

};
console.log(user?.address?.city); //undefined







 


