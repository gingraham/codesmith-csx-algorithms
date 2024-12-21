//**Instructions */
//Write a function disemvowel that takes in a string and returns a new string with all vowels removed.
//-------------------------

//Solution:
//Regex match everything ^ (not) a vowel include the /g for global search

//i: string
//o: string

const disemvowel = (str) => {
  return str.match(/[^aeiou]/g).join("");
};

//Test Case:
console.log(disemvowel("Gerald")); //"Grld"
