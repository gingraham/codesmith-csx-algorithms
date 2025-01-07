//**Instructions */

//Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

function PersonConstructor(){
    this.greet = function(){
       return "hello"
    },
    this.introduce = function(){
        return `Hi, my name is ${this.name}`
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
console.log(gerald.introduce())//"Hi, my name is Gerald";