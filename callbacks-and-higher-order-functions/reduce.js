//**Instructions */

//The function reduce takes an array and reduces the elements to a single value.

//The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.
//---------------------

//i: array, cb
//o: integer

//solution: 
    //add additional argument of an accumulator default to 0. 
    //iterate through array 
        //apply callback with two args el and accumulator;
            //on each iteration accumulator stores the result of the callback and updated accumulator passed in

        const reduce =(array,instructions, accumulator =0)=>{
            array.forEach(el => {
                    accumulator = instructions(el, accumulator)
            });
            return accumulator
        }

//Test Case: 
const arr =[1,2,3]
const sum = (a,b)=> a + b;
console.log(sum(1,2))//3
console.log(reduce(arr,sum))// 6