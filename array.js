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
console.log(fruits.indexOf("strawberry")); //-1
