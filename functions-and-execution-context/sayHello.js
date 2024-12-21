//***Instructions */
// Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.
//----------------------------

//DATA Flow:
//i: string
//o: string

//take argument
//return argument with "hi"concatenated in front

const sayHello = (str) => {
  return `Hi, ${str}`;
};
console.log(sayHello("Gerald")); // "Hi Gerald"
