//Class Notes
var myVar = 200;

myVar = 400;

myVar = 500;

var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]; //array consider one piece of data that is why you can store it var. one data type

var months = [
    "january",
    "february",
    "march"
];

var mixedArray = [300, "hello friend", true];

console.log(weekdays[0]);

console.log(mixedArray[4]);

console.log(mixedArray);

mixedArray[1] = "Hello friend!";

console.log(mixedArray);

mixedArray[3] = 998;

console.log(mixedArray);

mixedArray[1] = null;

console.log(mixedArray);

var emptyArray = [];

// Array Methods

// Array Push
emptyArray.push("this is the first item in the array!");

console.log(emptyArray);

emptyArray.push(1000);

emptyArray.push(false);

console.log(emptyArray);

// Array Pop

emptyArray.pop();

console.log(emptyArray);

emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);

// Array Unshift, adds a new value to the beginning of the array.

weekdays.unshift("happyday");

console.log(weekdays);

// Array Shift, removes the first value of the array.

weekdays.shift();

console.log(weekdays);


// Array ForEach

/*

listOfItemsArray.forEach(function (eachItem) {
    use eachItem how ever you want.
});

*/


weekdays.forEach( function (weekday) {
    console.log(weekday);
} );


// Loops and Arrays.

var setOfNumbers = [1, 10, 100, 1000, 10000, 400, 399, 119, 39, 20, 300, 1993, 3920, 39];

// console.log(setOfNumbers[0] * 6);
// console.log(setOfNumbers[1] * 6);
// console.log(setOfNumbers[2] * 6);


for (var i = 0; i < setOfNumbers.length; i = i + 1) {
    var product = setOfNumbers[i] * 6;
    console.log(product);
}



// Array within Array AKA multidimensional array.

var masterArray = [
    [6, 27],
    [40, 30],
    [90, 10]
];

masterArray; // the entire array.
masterArray[1].length;
masterArray[2][0]; // This will grab the number 90 from the third array inside of this array.

