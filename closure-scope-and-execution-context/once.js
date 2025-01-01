//**Instructions */
//Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.


//i: callback
//o:

//Solution:
    //instantiate an output to store value
    //keep track if returned function was called
        //if not called
            //set to called
            //store value of callback
        //else return value of callback

const once =(callback)=>{
    let output;
    let called = false;
    return (input)=>{
        if(!called){
            called = true;
            output = callback(input)
            return output
        }else{
            return output
        }
    }
}


const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7