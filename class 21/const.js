// const is also a block scope, redeclaration and reasignment is not possible

// {
//     const name = "venkat";
//     console.log(name)
// }

// console.log(name)


// const a = 100; 
// a = 200; // cannot be reassigned with const
// console.log(a)

// we cant redeclaration is not possible
// const name = "venkat";
// const name = "rama";


// const person = {name: "venkat"};   
// person.name = "rama"; //we are modifing the object..this allowed
// // person = {name: 'rama'};  //reassingment...no possible       
// console.log(person.name)           



// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6, 7, 8, 9, 10);
// console.log(numbers)

{
    const name = "venkat";
    console.log(name); //venkat

    {
        const name = "harshaaa";
        console.log(name) //harshaaaa
    }
}