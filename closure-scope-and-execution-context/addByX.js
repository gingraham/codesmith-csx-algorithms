//**Instructions */
//Now we are going to create a function addByX that returns a function that will add an input by x.

const addByX =(addend1)=>{
    return (addend2)=>{
        return addend1 + addend2;
    }
}
//Test Case:
const addByTwo = addByX(2)
console.log(addByTwo(3))//5