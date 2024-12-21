//**Instructions */

//Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.

// BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.
//--------------------------------------------------

//i:two, arrOfNum
//o: array

//Solution: 
//store value of func to sum odd of arr2
//store value of func to sum even of arr2
 //iterate over array 1
    //check if any number in arr2 greater than 20
        //true: add 1 to each array 1 el
    //add stored sum of oddArr2 to each el < 10
    //add stored sum of evenArr2 to each el > 10
    //return arr1

    const addingAllTheWeirdStuff =(arr1, arr2)=>{
        let oddSum = arr2.filter(num => num % 2 !== 0).reduce((curr,total)=> curr + total)
        let evenSum =  arr2.filter(num => num % 2 === 0).reduce((curr,total)=> curr + total)
        let addOneExtra = arr2.some((el)=> el > 20);
        for(let i in arr1){
            if(addOneExtra){
                 arr1[i] += 1;
            }
            if(arr1[i] < 10){
                arr1[i] += oddSum;
            }else if(arr1[i] > 10){
                arr1[i] += evenSum;
            }
        }   
        return arr1 
}

//Test Case:
//oddSum: 26;
//evenSum: 10;
const array1=[1,3,11],
        array2=[10, 5, 21];
console.log(addingAllTheWeirdStuff(array1, array2))//[28, 30,12]

console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]