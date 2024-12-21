//*******Instructions */

// Create a function subtractTwo that accepts a number and returns that number minus 2.

// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.
//--------------------------------------------

//i: arr, cb
//o: arr

//--------------------------------------------
//solve: //iterate over array
        //pass each el into the callback
        //store return value of callback and el to new array
        //return array
//--------------------------------------------
const map = (arr,cb)=>{
    const output = [];
    arr.forEach(el => {
        output.push(cb(el))
    });
    return output
}
const subtractTwo =(num)=> num - 2
const arr =[4,6,8];
const num = 8;
console.log(`Output: ${subtractTwo(num)}`)// output: 6
console.log(map(arr, subtractTwo))// [2,4,6]