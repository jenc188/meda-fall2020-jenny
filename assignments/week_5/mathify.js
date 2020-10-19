function add(num1, num2){
    var sum = num1 + num2;
    return sum;

}

//console.log(add(100, 50));

function subtract (num1, num2, reverse){
    if (reverse == true){
        var difference = num2 - num1;   
    }else{
    var difference = num1 - num2;
    }
 return difference;

}

function multiply (num1, num2){
    var product = num1 * num2;
    return product;

}

function divide (num1, num2){
    var quotient = num1/num2;
    return quotient;
}

function circleArea(radius){
    var radiusSquare = multiply (radius, radius);
    var pi = Math.PI;
    var area = multiply(radiusSquare, pi);
    return area;
}

//console.log(circleArea(5));

function totalSum3Times(num1, num2){
    var firstSum = add(num1, num2);
    var secondSum = add(num2 + 1, firstSum);
    var thirdSum = add(num2 + 2, secondSum);

    return thirdSum;

}

var results =totalSum3Times (4,5);

console.log(results);
console.log(50, 100, false) );
console.log(50, 100, true) );



