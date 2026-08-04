let x = 50//
let y = 20

console.log(x + y) 
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

//comparison operators
let a = 10
let b = 20  
console.log(a === b)
console.log(a !== b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

//logical operators
let isAdult = true
let hasID = false
console.log(isAdult && hasID)
console.log(isAdult || hasID) 
console.log(!isAdult)

//functions
function agecheck(age) {
    if (age >= 18) {
        return "You are badie!"
    } else {
        return "You are not badie!"
    }
}
console.log(agecheck(20))
