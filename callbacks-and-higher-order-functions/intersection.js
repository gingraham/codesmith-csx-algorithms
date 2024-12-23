//**Instructions */

//Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!
//----------------------------------------


//i: multi-arrays
//o: array

//solution: 
    //to use reduce method we set the accumulator to an array
    //reduce the first array
        //check if the other arrays includes the el
        // push to output 
        //return output

const intersection =(multiArr)=>{
  return  multiArr.reduce((acc,curr)=>{
   return acc.filter(num => curr.includes(num))
  })
}

//Test Case: 
const arr1=[1,2,3,4],
    arr2=[2,7,4,8],
    arr3=[2,8,7,4,5];
console.log(intersection([arr1,arr2,arr3]))//[2,4]