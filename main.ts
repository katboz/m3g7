//excercises from Code Academy
//Type inferences

let aged = true;
let realAge = 0;

if (aged) {
  realAge = 5;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`); // if the dog is 5 yo, is 35 years old in human years

// Type Shapes

let firstName = 'muriel!';

console.log(firstName.toUpperCase());
console.log(firstName.length);

// My console will write down MURIEL and 7, that is a lenght of the name. 

// any excercise:

let guess;
guess = 'blue';
guess = 8;
// I declared a variable with let named guess, without assigning it a value. Then I assigned color. And at the end I assigned the number. 

// Variable Type Annotations

//This line declares a variable named phoneNumber. It uses TypeScript type annotation : string to tell that phoneNumber must always be a string.
let phoneNumber : string;
if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}
