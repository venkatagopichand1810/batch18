// import { useState, useCallback} from "react";

// import Title from "./components/Title";
// import Count from "./components/Count";
// import CountBtn from "./components/CountBtn";
// import Age from "./components/Age";
// import AgeBtn from "./components/AgeBtn";


// function App() {

//   let[count, setCount] = useState(0);
//   let [age, setAge] = useState(10);

//   // function to handle the count and age

//   const handleCount = useCallback(() => {
//     setCount(count + 1)
//   }, [count])

//   const handleAge = (() => {
//     setAge(age + 1)
//   },[age])




//   return (
//     <>
//       <Title />
//       <Count count = {count}/>
//       <CountBtn handleCount = {handleCount}/>
//       <Age age = {age}/>
//       <AgeBtn handleAge = {handleAge}/>
    
//     </>
//   )

// }

// export default App

// //memo -> so that it will load components only when there is a change in the prop
// //usecallback -> when we child to parent....those component should load
// //useMemo -> in order to avoid recalcuation on each render,, only it should calculate when we change that par