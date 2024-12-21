//**Instructions */

// Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.
//------------------------------------

//DATA Flow: 
//i: two arrayOfNums
//o: one arrayOfNums

//Solution:
    //instantiate output array
        //iterate and add each element at the same index
        //push to output
        //return output

const mergingElements =(arr1,arr2)=>{
    const output =[];
    for(let i in arr1){
        output.push(arr1[i] + arr2[i])
    }
    return output
}  


//test case: 
const arr1 = [1,2,3],
        arr2=[4,5,6];      
console.log(mergingElements(arr1,arr2)) //[5,7,9]