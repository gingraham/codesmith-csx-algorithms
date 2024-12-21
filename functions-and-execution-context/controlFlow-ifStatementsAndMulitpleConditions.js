//**Instructions */
//Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!' if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.

//--------------------------------

//i: num
//o: string

const greetings=(num)=>{
    if(num < 12){
        return 'Good Morning!'
    }else if(num < 15){
        return 'Good Afternoon!'
    }else if(num > 15){
        return 'Good Night!'
    }
    
}


//Test Case:
console.log(greetings(13))// 'Good Afternoon!'
