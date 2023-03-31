console.log("Test")
//console.log("Test");
/**
 * This is a multi line comment
 * another line
 * 
 * Prozeduren
 */

function calcZins(k,p,t){
    // content of function
console.log("Zins")
let k = document.getElementById("k");
let p = document.getElementById("p");
let t = document.getElementById("t");
let zinsen = (k.value*p.value*t.value)/36000


}

var result= calcZins(200,2,360);
console.log(result);
result.innerHTML="result is"+zinsen;


