//**Instructions */
//Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

//i: array1, array2
//o: obj

//Solution:
    //instantiate output cache
        //iterate through value array
            //if value isn't in cache 
                    //add with value of empty array
            //iterate through callback array
                // push the value from the callback to the cached array
    //return cache

const multiMap =(arr1,arr2)=>{
    const cache ={};
    arr1.forEach(el => {
            if(!cache[el]){
                cache[el]=[];
            }
     arr2.forEach(cb =>{
        cache[el].push(cb(el))
     })       
    });
    return cache
}


// Test Case:
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }