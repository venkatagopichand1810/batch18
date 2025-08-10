
import './App.css';
import React from 'react';

function App() {
  var name = "venkat";
  const city = "chennai";
  let state = "Tamilnadu";
  let age = 30;

  // functions
  function welcome(username) {
    return `hello, ${username}`
  }  

  // loops
  let numbers = [1, 2, 3, 4, 5]; //arrays
  let doubleNumbers = [];
  for(let i =0; i< numbers.length; i++){
    doubleNumbers.push(numbers[i] * 2)
  }

  let isAdult = false;
  if(age >= 18){
    isAdult = true
  }

  let status = isAdult ? "Adult" : "minor";
  

  function square(n){
    return n * n
  }

  const sqResult = square(4);


  // if else


    const age1 = 20;
    let message = "";

    if(age1 >= 18){
      message = "you are an adult"
    } else {
      message = "you are minor"
    }


    const isLoggedIn = true;

    const text = "welcome to react JSX";
    const upper = text.toUpperCase();


    const person = {
      name: "venkat",
      city: "bangalore"
    }
  

    const mobile = {
      brand: "iphone",
      model: 13,
      year: 2023
    }

    // const brand = mobile.brand;

    const{brand, model, year} = mobile


    
    
    // const venkatage = 20;
  
    //     if(venkatage < 13){
    //       return <p>You are child</p>
    //     }
    
    //     if(venkatage < 17){
    //         return <p>You are minor</p>
    //       }
    
    //       if(venkatage > 19){
    //         return <p>You are adult</p>
    //       }


  return (
    
    <>
        <h1>Hello world</h1>
        <h1>Name is : {name}</h1>
        <h2>City is: {city} </h2>
        <h3>State is : {state}</h3>

        {welcome(name)}

        <ul>
          {doubleNumbers.map((num) => (
            <li>{num}</li>
          ))}
        </ul>

        <p> User are  {status} so you can vote</p>

        <span>Square of 4 is : {sqResult}</span>

        <p>{message}</p>

        <p>{isLoggedIn ? "Welcome back" : "please log in"}</p>

        {text} <br></br>
        {upper }<br></br>

        {person.name}<br></br>  
        {person.city}<br></br>  
        {brand}<br></br> 
        {model}<br></br>  
        {year} 
    </>



  );

  
}

export default App;


// binding or interpolation {}



