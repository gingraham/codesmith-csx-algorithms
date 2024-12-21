//**Instructions */
//Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.
//----------------------------

//i: obj
//o: array

//Solution: 
    //instantiate output = array
    //iterate over obj keys
        //use for or while loop
            //start at 0 and loop for the obj value number of times
            //add key to array each loop
        //return output

const arrayBuilder =(obj)=>{
    const output = [];
      for(let key in obj){
        for(let i = 0; i < obj[key]; i++){
            output.push(key)
           }
      }
    return output
}
//Test Case:
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []