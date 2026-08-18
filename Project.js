let classResults = [   { name: "Adaeze", score: 88 },
    {name: "Babatunde", score: 45 },
    {name: "Chidinma", score: 72 },
    {name: "David", score: 95 }
]
try {
    if (classResults.length === 0)throw new Error("No student records found");
    //Get all passing students (score >= 50);
    let passing = classResults.filter(s => s.score >= 50);

    //Get their names only
    let passingNames = passing.map(s => s.name);

    //calculate the class average
    let total = classResults.reduce((sum, s) => sum + s.score, 0);
    let average = total / classResults.length;
    console.log("Passing students: " + passingNames);
    console.log("Class average: " + average);
} catch (error) {
    console.log("could not process results: " + error.message);
} finally {
   "Results processing completed"
}
