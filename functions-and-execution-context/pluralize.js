// Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.

// The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

//i: arrOfString
//o: arrOfString

//to solve:
    //iterate of array of strings;
        //forEach string 
            //concat 's;
            //return updated array

const pluralize = (arr)=>{
    for(let i in arr){
        arr[i] = `${arr[i]}'s`
    }
    return arr
    } 

const arr =["cat", "dog", "bird"]
console.log(pluralize(arr))// ["cat's", "dogs's", "bird's"]