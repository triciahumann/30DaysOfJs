// L E V E L   1   E X E R C I S E S

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
let faang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(faang.split(" "));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

/* 17. Use indexOf to find the position of the first occurrence of
 the word because in the following sentence:'You cannot end a 
 sentence with because because because is a conjunction' */
 let sentence = "You cannot end a sentence with because because because is a conjunction";
 console.log(sentence.indexOf('because'))

 /* 18. Use lastIndexOf to find the position of the last occurrence
  of the word because in the following sentence:'You cannot end a 
  sentence with because because because is a conjunction' */
  console.log(sentence.lastIndexOf('because'));

  /* 19. Use search to find the position of the first occurrence 
  of the word because in the following sentence:'You cannot end 
  a sentence with because because because is a conjunction' */
  console.log(sentence.search('because'));

  /* 20. Use trim() to remove any trailing whitespace at the 
  beginning and the end of a string.E.g ' 30 Days Of JavaScript '.*/
  let newChallenge = ' 30 Days of JavaScript ';
  console.log(newChallenge.trim())

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('t'))

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'))

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstString = '30 Days Of';
let secondString = " JavaScript";
let fullString = firstString.concat(secondString);
console.log(fullString)

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))



// L E V E L   2   E X E R C I S E S

/* 1. Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than 
reaching down and lifting people up.' by John Holmes teaches us to 
help one another. */
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up' by John Holmes.")

/* 2. Using console.log() print out the following quote by Mother Teresa: blah blah blah */
console.log("'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'");

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = '10'; 
console.log(typeof num); // string
console.log(Number(num)); // 10

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num2 = '9.8';
let num2Float = parseFloat(num2);
console.log(num2Float); // 9.8

let num2Int = parseInt(num2);
console.log(num2Int); // 9
console.log(Math.ceil(num2Float)); // 10 yay!

// 5. Check if 'on' is found in both python and jargon
let language1 = 'python';
let language2 = 'jargon';

console.log(language1.includes('on'), language2.includes('on'));
// true true

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = 'I hope this course is not full of jargon';
console.log(sentence2.includes('jargon')); // true

// 7. Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random(); // generates random number btwn 0 - 0.999999
console.log(randomNum) // 0.7778450...

let numBtwnZeroAndHundred = randomNum * 101; // multiple by your top number + 1
console.log(numBtwnZeroAndHundred); // 72.7602834590
// round to nearest whole number
let roundRandomNum = Math.floor(numBtwnZeroAndHundred);
console.log(roundRandomNum) // 73

// 8. Generate a random number between 50 and 100 inclusively.
//Math.floor(Math.random() * (max - min + 1)) + min;
let max = 100;
let min = 50;
let randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum3) // 61

// 9. Generate a random number between 0 and 255 inclusively.
let numBtwnZeroAndTwoFiftyFive = randomNum * 256;
console.log(numBtwnZeroAndTwoFiftyFive); // 165.643535
// round to nearest whole number
let roundNum2 = Math.floor(numBtwnZeroAndTwoFiftyFive);
console.log(roundNum2) // 166

// 10. Access the 'JavaScript' string characters using a random number.
let word = 'JavaScript';

/* charAt selects the character at a specific index. This specific index
was a random index. The random index was created by Math.random() * the 
length of the original string */
let stringCharacter = word.charAt(Math.random() * word.length);
console.log(stringCharacter) // r

/* 11. Use console.log() and escape characters to print the following pattern. 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
\n after the number means "new line"
*/
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

/* 12. Use substr to slice out the phrase because because because 
from the following sentence:'You cannot end a sentence with because because because is a conjunction'*/
let string = "You cannot end a sentence with because because because it ends in something";
let newString = string.replace(/because/g, "")
console.log(newString);





// L E V E L   3   E X E R C I S E S