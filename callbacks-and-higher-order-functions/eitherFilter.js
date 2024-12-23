//**Instructions */
//Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

//i: array, callback1, callback2
//o: array

    //Solution:
        //Filter method returns an array
            //during iteration return element if   
                //value from callback 1 true
                    //OR value from callback 2 true
                    
const eitherFilter =(arr, callback1, callback2)=>{
    return arr.filter((el)=>{
        if(callback1(el) || callback2(el)){
            return el
        }
    })
}

const arrOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]