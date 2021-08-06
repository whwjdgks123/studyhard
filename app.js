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
console.log(toBuy[99999999999]);


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

const player = {
    name: "nico",
    points: 10,
    fat: true,
};
/*
console.log(player);
console.log(player.name);
*/
console.log(player);
//player.lastName="potato";
player.points = player.points + 15;
console.log(player.points);
