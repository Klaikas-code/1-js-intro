/*

ARRAY - sarasas, Arejus, matrica, masyvas, list'as, rinkinys



*/

const empty = [];
console.log(empty);


const luckyNumber = [7 ,777, 13, 666, 8, 2];
console.log(luckyNumber);

const studens = ['Jonas', 'Maryte', ' Petras', ' Ona']
console.log(studens);

const firstNumber = luckyNumber[0]
console.log(firstNumber);

console.log(luckyNumber[3]);
console.log(luckyNumber[1]);
console.log(luckyNumber[5]);
console.log(luckyNumber[7]);
console.log(luckyNumber[2]);
console.log(luckyNumber[4]);
console.log(luckyNumber[9]);

console.clear();

console.log(empty.length);
console.log(studens.length);
console.log(luckyNumber.length);

const numbers = [10, 2, 8, 4, 6];
const totalSum1 = numbers[0] + numbers[4] + numbers[1]+numbers[2]
console.log(totalSum1);

let totalSum2 = 0;

totalSum2 = totalSum2 + numbers[0];
totalSum2 = totalSum2 + numbers[1];
totalSum2 = totalSum2 + numbers[3];
totalSum2 = totalSum2 + numbers[2];
totalSum2 = totalSum2 + numbers[4];

console.log(totalSum2);

let totalSum3 = 0;

totalSum3 += numbers[0];
totalSum3 += numbers[1];
totalSum3 += numbers[3];
totalSum3 += numbers[2];
totalSum3 += numbers[4];

console.log(totalSum3);

console.clear();

const dictionary = ['pomidoras', 'agurkas', 'bulve', 'kefyras', 'druska', 'svogunu laiskai', 'lasiniai'];
// patiekalui reikes: a, b, c, d, e.

const sentence1 = 'patiekalui reikes:' + dictionary[0] +', ' +dictionary[1]+', '+dictionary[2]+', '+dictionary[3]+', '+dictionary[4]+', '+dictionary[5]+', '+dictionary[6]+'.'

console.log(sentence1);


let sentence2 = 'patiekalui reikes:';

sentence2 += dictionary[0]
sentence2 += dictionary[1]+', '
sentence2 += dictionary[2]+', '
sentence2 += dictionary[3]+', '
sentence2 += dictionary[4]+', '
sentence2 += dictionary[5]+', '
sentence2 += dictionary[6]+'.'

console.log(sentence2);
console.clear();
let sentence3 = 'patiekalui reikes:'
let index = 1;
sentence3 += dictionary[index++]+', ';
sentence3 += dictionary[index++]+', ';
sentence3 += dictionary[index++]+', ';
sentence3 += dictionary[index++]+', ';
sentence3 += dictionary[index++]+', ';
sentence3 += dictionary[index++]+'.';
console.log(sentence3);


let k = 0
k = k+1
k += 1
k++
let sentence4 = 'patiekalui reikes:'
let j = 0;
sentence4 += dictionary[++j]+', ';
sentence4 += dictionary[++j]+', ';
sentence4 += dictionary[++j]+', ';
sentence4 += dictionary[++j]+', ';
sentence4 += dictionary[++j]+', ';
sentence4 += dictionary[++j]+'.';
console.log(sentence4);

let sentence5 = 'patiekalui reikes:'
let l = 0;
sentence5 += dictionary[l++]+', ';
sentence5 += dictionary[l++]+', ';
sentence5 += dictionary[l++]+', ';
sentence5 += dictionary[l++]+', ';
sentence5 += dictionary[l++]+', ';
sentence5 += dictionary[l++]+'.';
console.log(sentence5);