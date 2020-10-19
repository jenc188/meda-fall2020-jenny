//Class Notes

$(document).ready(function(){

setTimeout(function(){
    $("body").append("<div id='content'></div>");
    $("div#content").html("<p>Good morning</p>");
    $("body").prepend("<h1> This page was dyamically generated</h1>");

},5000);

var myFavFood ="Pizza";
var newHTMLCode =
`<ul> 
    <li>${myFavFood}</li>
    <li>Burrito</li>
    <li>Hamburger</li>
    </ul>`;


$("body").append(newHTMLCode);

$("button#create-box").click(function(){
    $("h1").hide();
    $("body").append(`<div style ='width: 100px; height: 100px; border: 1px black solid;'></div>`);
});



});