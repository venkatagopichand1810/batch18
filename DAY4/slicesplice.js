// slice ...it will returns the copy of portion of an array
//original will not modified... ///array.slice(start, end)
// start index inclusive
//end index excluded

// let data = ["venkat","ram", "kavitha", "jack", "john"];

// const slicedData = data.slice(2);
// const slicedData1 = data.slice(1, 4);
// console.log(slicedData); 
// console.log(slicedData1);  //"ram", "kavitha", "jack",



// splice....modifies the original array add, remove, replace
// array.splice(start, deletcount, item1, item2)


let data = ["venkat","ram", "kavitha", "jack", "john"];
// const removedData = data.splice(1, 2);
const dataupdate = data.splice(1, 2, "someting1", "something2");
console.log(dataupdate);
console.log(data)