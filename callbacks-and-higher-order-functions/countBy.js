//**Instructions */
//Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.
//---------------------------------------

//i: array, callback
//o: obj

//Solution:
    //instantiate output cache;
    //iterate over array    
        //apply callback to each element
        //if cache doesn't have value of callback
            //add value of callback to cache as key and number 1 as value;
        //else increment the cache value;
    //return cache

const countBy = (arr, cb)=>{
    const output = {};
    arr.forEach(el=> {
        if(!output[cb(el)]){
            output[cb(el)] = 1; 
        }else{
            output[cb(el)] += 1;
        }
    });
    return output
}


//Test Case: 
const evenOrOdd =(num)=>{
 return num % 2 === 0 ? "even" : "odd"
};
const arr =[1,2,3,4,5]
console.log(countBy(arr,evenOrOdd))//{odd: 3,even: 2}