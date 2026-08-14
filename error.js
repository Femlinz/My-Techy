try {
    //code that might fail goes here
    let result = 10 / 0; //this will throw an error
    console.log(result); //prints "Infinity"
    console.log("this will not be printed"); //this will not be printed because the previous line threw an error
}catch (error) {
    // this runs ONLY if something goes wrong
    console.log("An error occured;" + error.message + "" + error.name);  
}

console.log("The program continues here")

function loadUserData(userId){
    console.log("Starting to load data...")
    try {
        if (userId <= 0) {
            throw new error("User ID must be greater than o")
        }
        console.log("Data loaded for user: " + userId)
    } catch (error) {
        console.log("Failed: " + error.message);
    } finally {
        console.log("Loading complete. Closing connection.");

    }
    }

    loadUserData(5)
    loadUserData(-1)

    function registerstudent(name, age) {
        try {
            if (!name) {
                throw new error("Name cannot be empty!");
            }
            if (age < 16 || age > 60) {
                throw new Error("Age must be between 16 and 60. Got: " + age);
            }
            console.log("Student registered: " + name + " Age: " + age);
        } catch (error) {
            console.log("Registration failed: " + error.message);
        }
            }

            registerstudent("Bola Okafor", 22)
            registerstudent("",15)
            registerstudent("kemi", 10)

