//**Instructions */
//Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

//i: array, callback
//o: boolean

//Solution:
    // get half the length of the array.
    //filter true elements from array
    //if the true elements array length is greater than half the orig. array
        //return true
        //else return false

const majority = (arr,callback)=>{
    let halfOfArr = Math.floor(arr.length / 2)
    let isTrue = arr.filter(el=>{
        return callback(el) === true
    })
   return  isTrue.length > halfOfArr ? true : false;
}


//Test Case:

const isEven = (num)=> num % 2 === 0;
const arr1= [1,2,3,4,5];
const arr2= [2,3,4,6,8];

console.log(majority(arr1,isEven))// false
console.log(majority(arr2,isEven))// true