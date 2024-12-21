//**Instructions */

// Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.
//-----------------------------------


//i: arr, cb
//o: no return!

//solution:
    //iterate over array pass elements to callback
const forEach=(arr,cb)=>{
    for(let i of arr){
        //uncomment to test: console.log(cb(i))
        cb(i)
    }
}
const arr = [1,2,3]
const addTwo =(num) => num + 2
console.log(forEach(arr, addTwo))//test: 3,4,5

//**Instructions */
// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.
//----------------------------------------

//i: arr,cb
//o: arr

//solution:
    //instantiate output array
        //iterate through arg array with forEach above
        //push value of element passed through callback to output array
        //return output
const map =(arr,cb)=>{
    const output =[];
    forEach(arr, (e)=>{
        output.push(cb(e))
    })
    return output
}


console.log(map(arr, addTwo))//[3,4,5]


