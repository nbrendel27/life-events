"use strict";

let fullName = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = true;
let lifeEvents = ["I was born in Troy, Michigan.", 
"I went to Hope College.", 
"I participated in junior olympics when I was 10 years old.",
"I love to be in nature."];

if(pineapplePizza) {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
} else {
    console.log(`My name is ${fullName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for(let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;
while(true) {
    let randomNumber = Math.floor(Math.random()*(10-1)+1);
    if(randomNumber !== 5) {
        counter++;
        console.log( "randomNumber !== 5");
    }else {
        counter++;
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}