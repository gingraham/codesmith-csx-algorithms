//**Instructions */

//Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
//---------------------------------------


//i: array, array, callback
//o: obj

//solution: 
    //output cache:
    //iterate through the first array 
        //run callback on the each el
        //if return value of callback === to element at the same index in second array
        //cache with element as the key and return value as value

const objOfMatches =(arr1, arr2, callback)=>{
    const cache ={};
    arr1.forEach((el, index) =>{
        if(callback(el) === arr2[index]){
            cache[el] = callback(el)
        }
    })
    return cache
}

//Test Case:
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }