///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

//assume we don't know if fujiAcres or galaAcres or pinkAcres will have all 7 days data available
// use max length and and if to check see if each array does not run out of bound
const maxLength = Math.max(
  fujiAcres.length,
  galaAcres.length,
  pinkAcres.length
);

for (let i = 0; i < maxLength; i++) {
  if (i < fujiAcres.length) {
    totalAcres += fujiAcres[i];
  }
  if (i < galaAcres.length) {
    totalAcres += galaAcres[i];
  }
  if (i < pinkAcres.length) {
    totalAcres += pinkAcres[i];
  }
}
console.log(`Total Acres is ${totalAcres}`);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
//totalAcres divided by the number of days picked to get the average daily acres
let averageDailyAcres = totalAcres / fujiAcres.length;
console.log(`Average Daily Acres is ${averageDailyAcres}`);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
//use while loop to calculate days to work on the acres left, each iteration decreases the acrea left by the average daily acres
while (acresLeft > 0) {
  days += 1;
  acresLeft -= averageDailyAcres;
}
console.log(days);
// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE
const eachAcreYield = 6.5;

//approach #1 use empty arrays loop through each acres array, multiply by each acre yield and push them onto the each tons array
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * eachAcreYield);
}

for (let i = 0; i < galaAcres.length; i++) {
  galaTons.push(galaAcres[i] * eachAcreYield);
}

for (let i = 0; i < pinkAcres.length; i++) {
  pinkTons.push(pinkAcres[i] * eachAcreYield);
}

// approach #2 use array map method

/*let fujiTons = fujiAcres.map((item) => item * 6.5);
let galaTons = galaAcres.map((item) => item * 6.5);
let pinkTons = pinkAcres.map((item) => item * 6.5);*/
//console.log(fujiAcres);
//console.log(galaAcres);
//console.log(pinkAcres);
console.log(fujiTons);
console.log(galaTons);
console.log(pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

//approach #1 using for loop
//use for loop to get the sum for each apple in pound

for (let i = 0; i < fujiTons.length; i++) {
  fujiPounds += fujiTons[i] * 2000;
}

for (let i = 0; i < galaTons.length; i++) {
  galaPounds += galaTons[i] * 2000;
}

for (let i = 0; i < pinkTons.length; i++) {
  pinkPounds += pinkTons[i] * 2000;
}

// approach 2 using array reduce function

/*fujiPounds = fujiTons.reduce((a, b) => a + b, 0) * 2000;
galaPounds = galaTons.reduce((a, b) => a + b, 0) * 2000;
pinkPounds = pinkTons.reduce((a, b) => a + b, 0) * 2000;*/

console.log(`Total number of pounds pinked for fuji is ${fujiPounds}`);
console.log(`Total number of pounds pinked for gala is ${galaPounds}`);
console.log(`Total number of pounds pinked for pink is ${pinkPounds}`);
// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//multiple each apple pounds with apple price to get the apple profit in cents
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(`Fuji profit is ${fujiProfit} cents`);
console.log(`Gala profit is ${galaProfit} cents`);
console.log(`Pink profit is ${pinkProfit} cents`);
// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//add up all apples profits
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(`Total profit is ${totalProfit}`);
