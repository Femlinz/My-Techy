//adding elements to an array
let fruits = ["apple", "banana", "orange"];
fruits.push("grape"); //adds an element to the end of the array
console.log(fruits);

fruits.unshift("kiwi"); //adds an element to the beginning of the array
console.log(fruits);

//removing elements from an array
fruits.pop(); //removes the last element
console.log(fruits);
fruits.shift(); //removes the first element
console.log(fruits);

//include , indexof
console.log(fruits.includes("apple")); //true
console.log(fruits.indexOf("banana")); //1
console.log(fruits.indexOf("strawberry")); //-1//reverse, sort, splice, splice

//sort, slice, splice, reverse
console.log("this is sorted array", fruits.sort()); //sorts the array in ascending order
console.log("this is reversed array", fruits.reverse()); //reverses the array
console.log("this is sliced array", fruits.slice(1, 3)); //returns a new array with elements from index 1 to 2
fruits.splice(1, 1, "mango");   //removes 1 element at index 1 and adds "mango" at index 1
console.log("this is spliced array", fruits); //prints the modified array
console.log("this is sliced array", fruits.slice(1, 3)); //returns a new array with elements from index 1 to 2
console.log("this is spliced array", fruits.splice(1, 2, "grape", "esther")); //prints the modified array
fruits.splice(1, 2, "kiwi" , "esther" ); //adds "kiwi" at index 1 without removing any elements
console.log("this is spliced array", fruits); //prints the modified array

//higher order array methods
//map, filter, reduce, forEach, find, findIndex, some, every
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); //returns a new array with each element multiplied by 2
console.log(doubled);

//map
const marketlist = ["apple", "banana", "orange", "grape", "kiwi"];
const addedprefix = marketlist.map(fruit => "I like " + fruit); //returns a new array with "I like " added to each element
console.log(addedprefix);

//filtermethod
const evenNumbers = numbers.filter(num => num % 2 === 0); //returns a new array with only even numbers
console.log(evenNumbers);   

const complexion = {"dark": "black", "fair": "white", "medium": "brown"}; 
const darkcomplexion = Object.values(complexion).filter(value => value === "black"); //returns a new array with only dark complexion
console.log(darkcomplexion);
