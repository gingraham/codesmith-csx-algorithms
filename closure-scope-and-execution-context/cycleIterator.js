//**Instructions */
//Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

//i: array
//o: element

    //Solution:
        //counter that represents the index initialize at -1;
        //each call 
            //increments the counter
            //increment counter
            //if counter equal to the array length set to 0 and return array element at counter index;
            //else return just return array element at counter index.

const cycleIterator = (arr)=>{
    let counter = -1
    return ()=>{
        counter++
       if(counter === arr.length){
        counter = 0;
        return arr[counter]
       }else{
        return arr[counter]
       }
       
    }

}          

//Test Case:
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'






