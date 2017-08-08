document.addEventListener('DOMContentLoaded', function() {
// We can compare numbers
//Predict true or false. Then, console log the code version to see if you were right.

/////////////////////
//////EXAMPLE///////
///////////////////
console.log("10 is less than 150")
// my guess: true
// write the javascript code below
console.log(10 < 150)
/////////////////

console.log("1 is greater than or equal to 0")
// my guess: true
// write the javascript code below
console.log(1 >= 0);

console.log("7 is greater than 15")
// my guess: false
// write the javascript code below
console.log(7 > 15)

// This works with strings too!

console.log('The string "apple" is equal "apple"')
// my guess: true
// write the javascript code below
console.log("apple" === "apple")

console.log('The string "apple" is equal "orange"')
// my guess: false
// write the javascript code below
console.log("apple" === "orange")

console.log('The string "apple" is not equal to "apple"')
// my guess: false
// write the javascript code below
console.log("apple" != "apple")

console.log('The string "apple" is not equal to "orange""')
// my guess: true
// write the javascript code below
console.log("apple" != "orange")

// This works with variables too!
var myFavoriteColor = "blue"

console.log('The variable myFavoriteColor is equal to the string "blue"')
// my guess: true
// write the javascript code below
console.log(myFavoriteColor === "blue")

console.log('The variable myFavoriteColor is not equal to the string "red"')
// my guess: true
// write the javascript code below
console.log(myFavoriteColor === "red")

console.log('The variable myFavoriteColor is equal to the string "purple"')
// my guess: false
// write the javascript code below
console.log(myFavoriteColor === "purple")


// These variables are all booleans
// We can see whether two booleans are both true using && (AND)
var likesComputers = true;
var likesSports = true;
var likesKnitting = false;
var likesDogs = false;
var likesCats = true;


// Predict if the combination will be true, then code it out to see if you're right.
console.log("I like computers and I like sports")
// my guess: true
// write the javascript code below
console.log(likesComputers && likesSports)

// We can see whether one of two booleans is true using || (OR)
console.log("I like sports and I like knitting")
// my guess: true
// write the javascript code below
console.log(likesSports || likesKnitting)

console.log("I like knitting or I like dogs")
// my guess: false
// write the javascript code below
console.log(likesKnitting || likesSports)

});
