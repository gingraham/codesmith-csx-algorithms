//**Instructions */
// Create a function goodKeys that accepts an object and a callback. The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.
//-------------------------------------------

//i: obj, callback
//o: array

    //Solution:
    //instantiate an output array
        //iterate of object
        //apply callback to each value
            //if value true push its key to output array
    //return output array

const goodKeys =(obj,callback)=>{
    const output =[];
    for(let key in obj){
       if(callback(obj[key])){
        output.push(key)
       }
    }
    return output
}


//Test Case:
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']