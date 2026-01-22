/**

For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

 */

String.prototype.toJadenCase = function () {
  return this
    .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
};


interface String {      // Declaration needed, don't remove it
  toJadenCase(): string;
};

console.log(        
"hello, user. how are you?".toJadenCase()
); // "Hello, User"