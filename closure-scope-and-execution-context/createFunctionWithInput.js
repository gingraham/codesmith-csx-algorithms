//**Instructions */
//Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

const createFunctionWithInput =(input)=>{
    return ()=>{
        return input
    }
}


//Test Case: 
const sayMyName = createFunctionWithInput("Gerald");
console.log(sayMyName())//"Gerald"