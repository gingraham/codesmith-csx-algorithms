//**Instructions */

// Write a function mergingTripletsAndQuints which takes in two arrays as arguments. This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
//--------------------------------------

//DATA Flow:
//i: 2 arraysOfNum
//o: array

//solution: 
    //function that checks if div by 3 or 5
    //iterate through array 
        //if div true
            //add elements at index of both arrays

const divByThreeOrFive = (num)=> num % 3 ===0 || num % 5 === 0;
console.log(divByThreeOrFive(2))

const mergingTripletsAndQuints =(arr1,arr2)=>{
    for(let i in arr1){
        if(divByThreeOrFive(arr1[i])){
           arr1[i] = arr1[i] + arr2[i]
        }
    }
    return arr1
}


//test Case:
console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]