//**Instructions */
//Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values
//------------------------------------

//i: array, callback
//o: obj

//Solution: 
    //output cache
    //iterate over array and apply callback
        //array el stored as key callback value stored as value

const arrToObj =(arr, callback)=>{
    const output = {};
    arr.forEach(el => {
        output[el] = callback(el);
    });
    return output;
}
//Test Case:
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }