
// try {
//     // let something = 5 / 0;
//     // console.log(something)
//     let x = y + 10;
// } catch(error){
//     console.log("an error occured")
// }

// try {
//     console.log(something)
// } catch(error){
//     console.log(`caught an error ${error.message}`)
// }

// try {
//     let result = add();
// } catch(error){
//     console.log(`function error : ${error.message}`)
// }



// let obj = null;

// try {
//     console.log(obj.name)

// } catch(error){
//     console.log(error.message)
// }
// finally {
//     console.log("operation is executed")
// }

// try {
//     let num = 10;
//     console.log(num.toUpperCase());
// } catch(error){
//     console.log(error.message)
// }


// function checkAge(age){
//     try {
//         if(isNaN(age)) {
//             throw new Error("Age must be a number")
//         }

//         if(age < 18){
//             throw new Error("venkat your age is not suitable")
//         }
//         console.log("You can able to vote")
//     } catch(error){
//         console.log(error.message)
//     }
   
// }

// checkAge(20);


// function setPecentage(value){
//     if(value < 0  || value > 100){
//         throw new Error("Percentage must be b/w 0 and 100")
//     }
//     console.log(value)
// }

// try {
//     setPecentage(150)
// } catch (error){
//     console.log(error.message)
// } finally {
//     console.log("it is done")
// }
