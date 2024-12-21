//**Instructions */
//Create a function gradeCalculator which takes a grade (gradeber) and returns its letter grade.

// grades 90 and above should return "A"

// grades 80 to 89 should return "B"

// grades 70 to 79 should return "C"

// grades 60 to 69 should return "D"

// 59 and below should return "F"

//---------------------------------------

//i: integer
//o: string

//Solution:
    //if else statement for each condition

const gradeCalculator = (grade)=>{
    if(grade > 90){
        return "A"
    }else if(grade >= 80){
        return "B"
    }else if(grade >= 70){
        return "C"
    }else if(grade >= 60){
        return "D"
    }else if(grade < 60){
        return "F"
    }
}


//Test Case:
console.log(gradeCalculator(30))//"F"