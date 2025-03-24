function empty() {
    // logika
}

const a = empty();
const b = empty();
console.log(a);
console.log(b);

console.log(empty());

function penki() {
    return 5;
}

const c = penki();
console.log(c);

function hi() {
    return 'Labas!';
}

const d = hi();
console.log(d);

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson());

console.clear();

// 2+2 = 4
// 7+5 = 12

function sum(a, b) {
    return a + b;
}

const e = sum(2, 2);
console.log(e);

const f = sum(7, 5);
console.log(f);

const g = sum(-7, 15);
console.log(g);

console.clear();

// 100 -> 121 Eur
// 200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT(price){
    const updatedPrice = price * 1.21 + ` Eur`
    console.log(updatedPrice);
    
    return updatedPrice ;
}

const p2 = priceWithVAT(200);
console.log(p2);
const p3 = priceWithVAT(100);
console.log(p3);
const p4 = priceWithVAT(73);
console.log(p4);

console.clear();

// Jonas -> Zodys `Maryta` yra sudarytas is 6 raidziu.
// Jonas -> Zodys `Ona` yra sudarytas is 3 raidziu.
// Jonas -> Zodys `Petras` yra sudarytas is 6 raidziu.
// Jonas -> Zodys `Jonas` yra sudarytas is 5 raidziu.



function nameLenght(name){
    const size = name.length;
    return `Zodys ${name} yra sudarytas is ${size} raidziu`;
}

const nl2= nameLenght(`Jonas`);
const nl3= nameLenght(`Ona`);
const nl1= nameLenght(`Maryte`);
const nl4= nameLenght(`Petras`);
console.log(nl2);
console.log(nl3);
console.log(nl1);
console.log(nl4);



function gotNumber(n){
   // return `Gautas skaicius: ` + n +'.'
    return `Gautas skaicius: ${n}.`;
}

const gn1 = gotNumber(5)
const gn2 = gotNumber(-13)
const gn3 = gotNumber(777)

console.log(gn1);
console.log(gn2);
console.log(gn3);

console.clear();


// 2, 2 -> 2 + 2 = 4
// 7, 5 -> 7 + 5 = 12
// -7, 15 -> -7 + 15 = 8

function sum(a ,b){
     const result = a + b;
     return `${a} + ${b} = ${result} `
}

console.log(sum(2, 2));
console.log(sum(7, 5));
console.log(sum(-7, 15));

function deh(a ,b){
     const result = a * b;
     return `${a} * ${b} = ${result} `
}

console.log(deh(7, 5));
console.log(deh(2, 2));
console.log(deh(-7, 15));

function bah(a ,b){
     const result = a / b;
     return `${a} / ${b} = ${result} `
}

console.log(bah(7, 5));
console.log(bah(2, 2));
console.log(bah(-7, 15));



