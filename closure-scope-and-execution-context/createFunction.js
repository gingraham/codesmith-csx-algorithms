//**Instructions */

//Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

const createFunction =()=>{
    return ()=>{
        return 'hello world'
    }
}

//Test Case:
const hello = createFunction();
console.log(hello())//"hello world"