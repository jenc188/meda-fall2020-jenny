//Class Notes

//synchronous
console.log(1);
console.log(2);
console.log(3);





//asynchronous
setTimeout(function () {
    console.log(5);
}, 3000); //run 3 sec(milisecond-3x1000)

/* var runsForever=setInterval(function (){
console.log("3 seconds have passed");}, 3000);
clearInterval(runsForever); this will stop the interval.
}*/

console.log(6);