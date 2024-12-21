//**Instructions */
//Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.
//------------------------

//DATA flow: 
//i: string
//o: string

//Solution:
//strings are essentially arrays.
    //you can use substring, slice or charAt.
    //pass in the length of the string - 1 to cause index's of arrays start at 0.
    const lastLetter =(str)=>{
        return str.charAt(str.length - 1)
    }

    //test case: 
console.log(lastLetter("gerald"))//"d"