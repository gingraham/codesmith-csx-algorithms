//**Instructions */
//Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values



//i: func, string
//o: obj

//Solution: 
    //output obj to hold all passed in args 
    //variable to hold password value
        //return func takes arg2
            //if password present
                //return output
            //else update output with orig arg as key and arg2 value
                //return arg2

    const saveOutput =(func, password)=>{
        const output = {};
        return (arg)=>{
           if(arg === password){
            return output
           }else{
            output[arg] = func(arg)
            return func(arg)
           }
        }
    }



//Test Case:
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
