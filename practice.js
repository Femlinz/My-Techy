 //functions
 function lotterycheck(number){
    if (number === 4) {
        return "You won the lottery!"
    } else {
        return "Better luck next time!"
    }
 }
 console.log(lotterycheck(20))
 console.log(lotterycheck(4))   
 console.log(lotterycheck(10))

 //function
 function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
 }
 console.log(checkEvenOdd(11))

 function ballongame(num){
 if (num >= 10) {
    return "You won the game!"
}
 else {
    return "You lost the game!"
 }
 }
 console.log(ballongame(50))

 function checkGrade(grade){
    if (grade >= 70 && grade <= 100) {
        return "You got an A!"
    }if (grade >= 60 && grade <= 69){
        return "You got a B!"
    }if (grade >= 50 && grade <= 59){
        return "You got a C!"
    }if (grade >= 40 && grade <= 49){
        return "You got a D!"
    }if (grade >= 0 && grade <= 39){
        return "You got an F!"
    }
 }
 console.log(checkGrade(85))
 console.log(checkGrade(65))
 console.log(checkGrade(55))
 console.log(checkGrade(45))
 console.log(checkGrade(25))
 console.log(checkGrade(9)) 

 //ARROW FUNCTION
 const checkEvenOddArrow = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
 }
 console.log(checkEvenOddArrow(11)) 
 