// 1. declare a variable named challenge and assign it to an intial value '30 days of js'
let challenge = '30 Days Of JavaScript';

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method
// substring(): It takes two arguments, the starting index and the stopping index but 
// it doesn't include the character at the stopping index.
console.log(challenge.substring(2, 21));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0,3));

// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));
// case sensitive, provided "false" output when I did inludes('script')

// 9. Split the string into an array using split() method
console.log(challenge.split());
// ['30 Days Of JavaScript']
console.log(challenge.split(""));
// (21) ['3', '0', ' ', 'D'....]
console.log(challenge.split(" "));
// (4) ['30', 'Days', 'Of', 'JavaScript']

// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// split the string at the comma and change it to an array.
