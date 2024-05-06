"use strict";

let hours = 60;
let wage = 10;
let pay = 0;


console.log(`wage: ${wage} hours: ${hours} pay: ${pay}`)
let count = 0;
while(pay <= 1000000) {
    count++;
    if(hours > 40) {
        let ot = hours - 40;
        pay += (40*wage) + ((1.5*wage)*ot);
    } else {
        pay += hours*wage;
    }
}
console.log(count);