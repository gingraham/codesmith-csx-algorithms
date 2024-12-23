//**Instructions*/
//Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!
//------------------------------


//i: arrayOfArrays
//o:array

const union = (arr)=>{
    return arr.reduce((acc, curr)=>{
              curr.forEach(el=>{
                  if(!acc.includes(el)){
                      acc.push(el)
                    }
              })
              return acc
      },[])
  }
//Test Case:
const arr1=[1,2,3,4],
    arr2=[2,7,4,8],
    arr3=[2,8,7,4,5];
console.log(union([arr1,arr2,arr3]))//[1,2,3,4,5,7,8]