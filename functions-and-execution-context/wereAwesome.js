//**Instructions */
// Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"

// If you are coding on your own, get creative! Instead of a pair programming partner, it could be the name of your friend, your pet, or even your rubber ducky!
//---------------------------------------

// DATA flow
//i: string
//o: string

//Solution:
//take two args
    //concat the args with a string
    //return string
        //implementation to capitalize first letter of and lowercase additional letters of entries.
        const wereAwesome =(str2,str1)=>{
            return `${str1.charAt(0).toUpperCase().concat(str1.substring(1).toLowerCase())} and ${str2.charAt(0).toUpperCase().concat(str2.substring(1).toLowerCase())} are awesome!`
        }
//test case: 
console.log(wereAwesome("TRICIA","gerald")) // "Tricia and Gerald are awesome!"

