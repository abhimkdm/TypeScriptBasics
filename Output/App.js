"use strict";
// var, let and const
var message2 = "Hello TypeScript";
var message3 = "Hello TypeScript";
// Var - function scope 
// function functionscope()
// {
//     if(true)
//     {
//         var message = "Hello TypeScript";
//         console.log(message);
//     }
//     var message = "Hello TypeScript Again";
//     console.log(message);
// }
// functionscope();
// Let & const - Block scope 
function Blockcope() {
    if (true) {
        var message = "Hello TypeScript";
        console.log(message);
        //message ="dasd";
    }
    //console.log(message);
}
Blockcope();
