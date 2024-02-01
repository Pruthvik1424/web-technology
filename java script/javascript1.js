// external javascript

//for getting output we need to link external js file to html file using[ <script src ="javascript1.js"></script> ]
// in external js we are not use <script tag> instead fo using script tag we directly initialize aand print in the console
// in internal js we are using <script></script> inside the <head> tag
// in java script semicolon; is not mandatory

// declaring and initializing var key word
var ref3;
ref3= "wild";
console.log(ref3);

// declaring and initializing let key word
let ref4;
ref4 ="photography";
console.log(ref4);

// initializing const keyword

const ref5 ="by pruthvik";
console.log(ref5);

// 3 types of function

// self invoking function
// here we using all 3 types of keyword
(function(){
    var ref6="good morning"
    console.log(ref6, typeof(ref6))
    let ref7="good afternoon"
    console.log(ref7)
    const ref8="good night"
    console.log(ref8)
}())

// named function
// declaring named function by function name of the funtion(){printing}invoking by name of fuvtion

function pruthvik(){
    console.log("named function")
}
pruthvik()   //--> invoking 

//Arrow function
// here use keyword ,arrowfunction=()=>{print console}invoking()
var Arrowfunction=()=>{
    console.log("king kholi")
}
Arrowfunction()