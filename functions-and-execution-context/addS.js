//**Instructions */

// Create a function addS that accepts a string, and returns the string with an "s" added to the end.
//----------------------------------------------

//DATA Flow
//i: string
//o: string

//Solution:
//concat "s" to the passed in argument 
    //return updated string
const addS = (str)=>{
    return `${str}s`
}

//test case: 
console.log(addS("Gerald"))//"Geralds"