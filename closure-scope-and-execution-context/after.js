//**Instructions */
//Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

//solution:
    //keep counter of number of times called
        //increment counter;
        //if counter not equal to number
            //return
        //else return value from callback

const after =(num, callback)=>{
    let counter=0;
    return (input)=>{
        counter++;
        if(count !== num){
            return
        }else{
            return callback(input)
        }
    }
}

//Test Case:
const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed