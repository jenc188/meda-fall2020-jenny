// Class Notes

var  myObject = {
    id: "9997466j",
    "first Name": "Ron",
    lastName: "Todd",
    address: ["123 Sesame St.", "500 California St."],
    age: 39,
    title: "Engineer"
};

var myArray = ["Ron", "Todd", "123 Sesame St.", 39, "Engineer"];

var months = {
    firstMonth: "January",
    secondMonth: "February"
};

myArray.length;
myArray[0]; // myArray.0 IS NOT VALID
console.log(myObject.address);
myObject["first Name"]; // how to access key with space in it. //prefer way than myObject.address, if key has space

var myEmployees = [];

myEmployees.push(myObject);

mySecondEmployee = {
    firstName: "Ben",
    lastName: "So",
    address: "333 Main St.",
    age: 45,
    title: "CEO"
};

myThirdEmployee = {
    firstName: "John",
    lastName: "Doe",
    address: "800 USA St.",
    age: 50,
    title: "Scientist"
};

// Push 2 more employees into the employee array.
myEmployees.push(mySecondEmployee, myThirdEmployee);

console.log(myEmployees);

// Track the total additive ages.
var totalAges = 0; // not inside for loop so it won't recreate each time setting it 0 to each time. 

// Loop through each element in our employee array.
for (var i = 0; i < myEmployees.length; i = i + 1) {
    // ... And get the age of the current employee, add it to totalAges.
    totalAges = totalAges + myEmployees[i].age;
}

// Divide the total ages by the amount of employee we had to get the average age.
var averageAge = totalAges / myEmployees.length;

//console.log((32+45)/2);
console.log(averageAge);

// Functions inside of Objects, Arrays, and Variables.

var something = 100;

// Definition of a function.
function someFunction() {
    console.log("I am a function!");
}

// We are NOT calling someFunction, instead we are passing the definition of someFunction into storedFunction.
var storedFunction = someFunction;

// Because storedFunction is holding an actual function (from line 66) we can actually run this function by putting parenthesis after the variable call.
storedFunction();
// We didn't get rid of the someFunction definition, so we can still call it even though we have the same thing in storedFunction.
someFunction();

var runForEachEmployee = function (employee) { //anomonous fuction 
    console.log("Hello!" + employee.firstName);
};

myEmployees.forEach(runForEachEmployee);

var specialObject = {
    doSomeWork: function () {
        console.log("Working!");
    },
    someData: "Hello friend"
};


// Runs the function stored in the key "doSomeWork" inside of specialObject object.
specialObject.doSomeWork();
console.log();
myEmployees.length;


// An object's Property holds data (that belongs to that object).
// An Object's Method holds a function (that belongs to that object).

var myArray2 = [
    100,
    200,
    function () {
        console.log("hello world");
    },
    400
];

myArray2[2](); // Runs the function in the array at index 2.