// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)
var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if(+cardNumber.substring(0,2) === 38 || +cardNumber.substring(0,2) === 39 && cardNumber.length === 14){
    return "Diner's Club";
  }if(+cardNumber.substring(0,2) === 34 || +cardNumber.substring(0,2) === 37 && cardNumber.length === 15){
    return "American Express"
  }if(+cardNumber.substring(0,2) === 51 || +cardNumber.substring(0,2) === 52 || +cardNumber.substring(0,2) === 53 || +cardNumber.substring(0,2) === 54 || +cardNumber.substring(0,2) === 55 && cardNumber.length === 16){
    return "MasterCard"
  }if(+cardNumber.charAt(0) === 4 && cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
    return "Visa"
  }
};

console.log("---DINER CLUB TEST---");
console.log(detectNetwork('38345678901234'));
console.log(detectNetwork('39345678901234'));

console.log("---AMERICAN EXPRESS TEST---");
console.log(detectNetwork('343456789012345'));
console.log(detectNetwork('373456789012345'));

console.log("---VISA TEST---");
console.log(detectNetwork('4123456789012'));
console.log(detectNetwork('4123456789012345'));
console.log(detectNetwork('4123456789012345678'));

console.log("---MASTERCARD TEST");
console.log(detectNetwork('5112345678901234'));
console.log(detectNetwork('5212345678901234'));
console.log(detectNetwork('5312345678901234'));
console.log(detectNetwork('5412345678901234'));
console.log(detectNetwork('5512345678901234'));
