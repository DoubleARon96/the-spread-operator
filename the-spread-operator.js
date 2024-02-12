/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let Arr = [1, 2, 3];
let Arr2 = Arr;
//push means add
Arr2.push(4);
console.log("Second array:", Arr2);
console.log("fist arry:", Arr);
//but this adds the 4 to the first arry and the second because the path is the same.

// Copying an array
let arr3 = [4, 5, 6];
//this spread the arr3 into the arr4 
let arr4 = [...arr3];
//this makes it a whole new variable
arr4.push(7);
console.log("Second array:", arr3);
console.log("fist arry:", arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {...obj1, d: 4};
let obj3 = {...obj1, b: 5};
console.log("first object:", obj1);
console.log("second Object:", obj2);
console.log("third Object:", obj3);

// Copying only part of an array/object
let arr5 = [...Arr, {...obj1 }, ...arr3, "x", "y","z"];
console.log(arr5);