//**Instructions */
//Construct a function joinAndMap with three parameters: array1, array2, and a callback function. The function should combine the two arrays then invoke the callback function on each element, returning the resulting array. This function should not mutate the passed-in arrays.
//-----------------------------------------------


//i: array, array, callback
//o: array

//Solution:
    //instantiate output array
    //destruct arrays
        //iterate over arrays 
            //applying callback
            //push to output
    //return output

    const joinAndMap = (arr1,arr2,callback)=>{
        const output =[];
        const joined = [...arr1,...arr2]
        joined.forEach(num =>{
            output.push(callback(num))
        })
        return output
    }



// Test case:
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']
