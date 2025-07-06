//excercises from Code Academy
//Type inferences
var aged = true;
var realAge = 0;
if (aged) {
    realAge = 5;
}
var dogAge = realAge * 7;
console.log("".concat(dogAge, " years")); // if the dog is 5 yo, is 35 years old in human years
// Type Shapes
var firstName = 'muriel!';
console.log(firstName.toUpperCase());
console.log(firstName.length);
// My console will write down MURIEL and 7, that is a lenght of the name. 
// any excercise:
var guess;
guess = 'blue';
guess = 8;
// I declared a variable with let named guess, without assigning it a value. Then I assigned color. And at the end I assigned the number. 
// Variable Type Annotations
//This line declares a variable named phoneNumber. It uses TypeScript type annotation : string to tell that phoneNumber must always be a string.
var phoneNumber;
if (Math.random() > 0.5) {
    phoneNumber = '+61770102062';
}
else {
    phoneNumber = '7167762323';
}
//string interpolation
var Name = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
console.log("Your name is ".concat(Name, " ").concat(lastName, "."));
console.log("You are ".concat(age, " years old."));
