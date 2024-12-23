//**Instructions */
//Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

//i: array, callback
//o: array
    //Solution: 
        //iterate through array 
            //apply callback on each el
            //sort by true or false
                //**  toSorted method so that orig. array is NOT mutated per challenge stipulations.***
            
const prioritize = (arr, callback)=>{
    return arr.toSorted((a,b)=>{
        if(callback(a) && !callback(b)){
            return -1
        }
        if(!callback(a) && callback(b)){
            return 1
        }
    })
}


//Test Case:
const isEven = (num)=> num % 2 === 0;
const arr =[1,2,3,4,5,6];

console.log(prioritize(arr,isEven))// [2,4,6,1,3,5]