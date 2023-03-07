const a = "beautiful";
console.log(a[5]+a[6]+a[7]+a[8]);

const food = "I was feeling hungry today";
const word = "eat";
const food2 = (`I was f${word}eeling hungry today`);
console.log(food2);

const story = "The quick brown fox jumps over over the lazy dog";
const count =  (story.match(/the/g) ||[]).length;
const count1 =  (story.match(/brown/g) ||[]).length;
console.log(count);
console.log(count1);

const string1 =  "We are now going to school";
const word1 = "now";
console.log(`The word "${word1}" ${string1.includes(word1) ? 'is' : 'is not'} in the string`);
const string2 = "The child was sitting on the table before it fell";
const word2 = "sitting"
console.log(`The word "${word2}" ${string2.includes(word2) ? 'is' : 'is not'} in the string`);


const word3 = "wonderful";
 console.log(word3.toUpperCase());


const word4 = "amazing"; 
const word5 ="BEneath";
console.log(word4.toLowerCase());
console.log(word5.toLowerCase());

const word6 = "A beautiful wedding";
const stmt = word6.split(' ')
.map(w => w[0].toUpperCase() +w.substring(1).toLowerCase())
.join(' ');
console.log(stmt);

