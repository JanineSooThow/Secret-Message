let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//Q1
secretMessage.pop();
console.log(secretMessage);

//Q2 Using .length of the array
console.log(secretMessage.length);
//output: 23

//Q3 - adding words 'to' and 'Program' to end of the secretMessage array 
function addsecretMessage(arr) {
  arr.push('to', 'Program');
}

addsecretMessage(secretMessage);
console.log(secretMessage);

//Q4 - changing the word 'easily' to the word 'right' by accessing the index and replacing it
const index = secretMessage.indexOf('easily');
secretMessage[index] = 'right';
console.log(secretMessage)

//Q5 Using an array method to remove the first string of the array
const firstString = secretMessage.shift();
//expected output would remove 'Learning'
console.log(secretMessage);
//removes 'Learning' 

//Q6 - using an array method to add string 'Programming' to the beginning of the array
secretMessage.unshift('Programming');
console.log(secretMessage)
//output: 'Programming' is at the beginning of the array

//Q7 - Using splice() to remove the strings 'get', 'right', 'the', 'first', 'time' and replacing them with the single string 'know'

secretMessage.splice(6, 5, 'know');
console.log(secretMessage);
//In this approach, we directly specify the starting index (7) where we want to begin removing elements, the number of elements to remove (5), and the replacement string ('know,'). The splice() method will remove the specified elements and replace them with the provided string. The resulting secretMessage array will contain the updated values.

//Q8 - Print secret message as a sentence
console.log(secretMessage.join(' '))
//output: Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program