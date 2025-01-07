//**Instructions */

//Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
function PersonConstructor(){
    this.greet = function(){
       return "hello"
    }
}

function personFromConstructor(str, num){
   let person = new PersonConstructor();
   person.name = str;
   person.age = num;
   return person
}

//Test Case: 
let name = "Gerald",
    age = 45;

const gerald = new personFromConstructor("Gerald", age)
console.log(gerald.name)//Gerald;
console.log(gerald.age)//45;
console.log(gerald.greet())//hello;