//Boolean
//const amIFat = false;

//let someting;

//console.log(someting, amIFat);


//************************************* */

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
