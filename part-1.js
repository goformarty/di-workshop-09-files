console.log('your code here');

const fs = require('fs');
const fileContent = fs.readFileSync('names.txt', 'utf-8');

const arrayOfNames = fileContent.match(/[^\r\n]+/g);
let reversedArr = [];

for (var name of arrayOfNames) {
    reversedArr.push(name);
}

joinedReversedArr = reversedArr.join(" ");

fs.writeFileSync('names-reversed.txt', joinedReversedArr, 'utf-8');

console.log(arrayOfNames[0]);
console.log(reversedArr[0]);
console.log(joinedReversedArr);