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
 
//length
console.log(fruits.length); //returns the length of the array
console.log(fruits[fruits.length -2])


//array
let fruits1 = ["apple", "banana", "orange"];
console.log("i love " + fruits1[0] + " and " + fruits1[1] + " and " + fruits1[2]); //prints the elements of the array
console.log("i love " + fruits1)
//print each element of the array using for loop
fruits1.forEach(fruit => console.log("i love " + fruit)); //prints each element of the array

//map
let prices = [500, 1200, 800, 3000];
// Add 10% VAT to every price 
let priceswithVAT = prices.map(function(price) {
    return price * 1.1; // Add 10% VAT
});
console.log(priceswithVAT);
console.log(prices)

//filter
let scores =[45, 72, 38, 90, 55, 29, 88];
let passingScores = scores.filter(function(score) {
    return score >= 50;
});
console.log(scores);
console.log(passingScores);

//arrow function
let fallingscores = scores.filter(score => score < 50);
console.log(fallingscores);

