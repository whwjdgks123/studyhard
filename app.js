//Boolean
//const amIFat = false;

//let someting;

//console.log(someting, amIFat);


//************************************* */
/*
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sund";

const datsOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat"];

//const nonsens = [1, 2, "hello", false , null, true , undefined , "nico"];

//Get Item from Array
 //console.log(datsOfWeek);

//dd one more day to the Array
datsOfWeek.push("sun");

//console.log(datsOfWeek);

const toBuy = ["potato" , "tomato", "pizza"];
//toBuy.push("kimbab");
//console.log(toBuy[99999999999]);

*/
/******************************* */
/*
const playerName ="nico";
const playerPoints= 121212;
const PlayerHandsome = false;
const playerFat = "little bit";

player.name
player.points
player.handsome  


//player[0] == name
//player[1] == points
const player = ["nico", 1212, false, "little bit"];
*/
/*
const player = {
    name: "nico",
    points: 10,
    fat: true,
};
*/
/*
console.log(player);
console.log(player.name);
*/
/*
console.log(player);
//player.lastName="potato";
player.points = player.points + 15;
console.log(player.points);
*/

/************************** */
/*

console.log("Hello my name is Nico");
console.log("Hello my name is Dal");
console.log("Hello my name is Shigatsu");
console.log("Hello my name is Flynn");
console.log("Hello my name is Nico");
console.log("Hello my name is Nico");
console.log("Hello my name is Nico");
console.log("Hello my name is Nico");
console.log("Hello my name is Nico");
*/
/*
function sayHello(nameOfPerson,age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm "+ age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
*/
/*
function  plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a,b) {
    console.log(a / b);}

plus(8, 60);
divide(98,20);

const player ={
    name:"nico",
    sayHello: function (otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

function  plus(a, b) {
    console.log(a + b);
}
plus(5,5);
*/
/************************************* */
/*
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("meat");
console.log(toBuy);

const day = ["mon", "tue", "wed"]

///////////////////////////////////////////
const player = {
    name:"NIco",
    age: 98,
};

console.log(player);
player.name = "nicolas";
console.log(player);
player.sexy ="soon";
console.log(player,console);

function plus(a,b) {
    console.log(a + b);
}



plus(5, 10);
plus(1.23456, 99);
plus(1102, 1228);
plus(5, 15464564);

function minusFive(c) {
    console.log(c -5);
}

minusFive(10,11,12,34,4,5,6,7);
*/
/*
//////////////////////////////////////////
const calculator = {
    plus: function (a,b) {
        return a + b;
    },
    minus: function(a,b){
        return a - b;
    },
    times: function(a,b){
        return a * b;
    },
    divide: function (a,b){
        return a / b;
    },
    power: function (a,b){
        return a**b;
    }
};

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timeResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timeResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);


//console.log(plusResult);
//calculator.plus(2,3);
//calculator.minus(2,3);
//calculator.times(2,3);
//calculator.divide(2,3);
//calculator.power(2,3);

const age=96;
function calculatorKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);

*/

const age =parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young");
} else if(age >= 18 && age <=50) {
    console.log("You can drink");
} else if(age > 50 && age <=80) {
    console.log("You should exercise");
} else if(age > 80) {
    console.log("You can do whatever you went");
} 

