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

let emailextract = "femlinz104@gmail.com";

console.log(emailextract.indexOf("@"));

let bio = "I am a backend developer from Lagos";
 
console.log(bio.includes("backend"));
console.log(bio.includes("frontend"));
console.log(bio.includes("Lagos"));

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report"));
console.log(filename.startsWith("draft"));
console.log(filename.endsWith(".pdf"));
console.log(filename.endsWith(".docs"));

//real world senerio
function checkfile(name) {
    if (name.endsWith(".pdf")){
        console.log("This is a PDF file. Safe to open it.");
    } else {
        console.log("Unknown file type: " + name);
    }
}

checkfile("Invoice.pdf");
checkfile("Virus eye")

//slice, substring
let fullname = "Oluwaseun Adeyemi";

console.log(fullname.slice(0, 9));
console.log(fullname.slice(10));
console.log(fullname.substring(0, 9));

let word = "JavaScript";
console.log(word.slice(-6));
console.log(word.substring(-6));

//replace, replaceAll
let message = "I love lagos. Lagos is amazing. Lagos never sleeps.";

console.log(message.replace("Lagos", "Abuja"));
console.log(message.replaceAll("Lagos", "Abuja"));

//real world project
let phoneNum = "08107038130"
let masked = (phoneNum.replace("070381", "******"));

console.log(masked);

//Split by comma
let courses = "javaScript,node.js,PostgreSQL,MongoDB";

let courselist = courses.split(",");

console.log(courselist);

//split a sentence into individual word
let sentence = "Backend development is fun";

console.log(sentence.split(" "));

//split into individual characters
console.log("Esther".split(""));

//padStart, padEnd, repeat
let id = "42";
console.log(id.padStart(5, "0"));
console.log(id.padEnd(5, "-"));
console.log("8842".padEnd(5, "-"));
console.log("*".repeat(5));
console.log("LOVE".repeat(4));

let Username = " John doe "
console.log(Username.trim())

let number = "123456789"
console.log(number.replace("5678", "****"))
console.log(number.slice(-4))

//changing case letter
let usermail = "FEM@GMAIL.COM"
console.log(usermail.toLowerCase())

//finding index value
let Image = "Profile_pic.png"
console.log(Image.indexOf("."))
console.log(Image.indexOf("p"))
console.log(Image.indexOf("l"))
//combination
let firstName = "Ada"
let lastName = "Lovelace"
console.log("Ada " + "Lovelace")


//Bad Words
const comment = "this is heck good"
console.log(comment.replace("heck", "****"))

//join array
let user = ["my", "first", "blog"]
console.log(user.join('-'))

//checking ends with
let ray = "raymond"
console.log(ray.endsWith('.exe'))
//

let Phone = "+2348011223344"
console.log(Phone.substring(0, 4))
console.log(Phone.slice(2))

//toUpperCase
let promocode = "summer2026"
console.log(promocode.toUpperCase())

let receipt = "invoice.pdf"
console.log(receipt.split(0))
console.log(receipt.indexOf(-1))

let info = "[INFO] Database conneted"
console.log(info.slice(6))

//map
let sales = [500, 1200, 800, 3000];
let salesWithVAT = prices.map(function(price) {
return price * 1.1;
});
console.log(sales)
console.log(salesWithVAT)

//print each food
let foods = ["Rice","Beans", "Yam", "Bread"]
foods.forEach(function(food){
    console.log("I love " + food);
})

//filter method
let marks = [45, 72, 38, 90, 55, 29, 83];
let passingmarks = marks.filter(function(mark){
    return mark >= 60
})
console.log(marks);
console.log(passingmarks);

//find method and filter
let students = [
    { name: "Amara", score: 45},
    {name: "Biodun", score: 72},
    {name: "Cynthia", score: 90},
];
let topstudent = students.filter(function(student){
    return student.score > 70
});
console.log(topstudent);

//reduce
let cartPrices = [1500, 800, 2200, 450, 1000]
let total = cartPrices.reduce(function(runningTotal, currentPrice){
return runningTotal + currentPrice;    
}, 0);
console.log(total)

//Destructuring
let employee = {
    name: "Tunde Balogun",
    role: "Frontend Developer",
    salary: 450000,
    city: "Lagos"
};
const{name, role, salary,} = employee;
console.log(name);
console.log(role);
console.log(salary);
//spread and rest
let profile = {name: "Ada", age: 22};
let updatedProfile = {
    ...profile,
    city: "Abuja"
};
console.log(updatedProfile);

















