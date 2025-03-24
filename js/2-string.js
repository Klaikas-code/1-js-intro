/*
String - tekstas, simboliu grandinele

tekstines reiksmes inicijavimas 
' - (vienguba kabute)
" - (dviguba kabute)
` - bactick
*/


const a = 'Labas'
console.log(a);



// Vienguba (') kabute.
const k1 = "vienguba (') kabute"

console.log(k1 );
const name = "Jonas";
const surname = 'Jonaitis';

const fullname = name + ' ' + surname
console.log(fullname);

const k12 = "vienguba (') kabute" + ' ir dviguba (") kabute';
console.log(k12);

const k3 = 'vienguba (\') kabute'

console.log(k3);

const k5 = 'vienguba (\') kabute" ir dviguba (") kabute'

console.log(k5);


const k7 = 'vienguba (\') kabute" ir dviguba (\") kabute'
console.log(k7);

const backSlash1 = '\\'
const backSlash2 = "\\"

console.log(backSlash1);
console.log(backSlash2);

console.clear()

/*
<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>    
</header>

 - \ preivercia spausdinti sekanti simboli
 - \r return, kursorius gryzta i eilutes pradzia
 - \n new line, kursorius nusileidzia viena eilute zemyn
 - \t tab
*/
const html = '<header>\r\n\
\t<img>\r\n\
\t<nav>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t\t<a></a>\r\n\
\t</nav>\r\n\
</header>';
console.log(html);

const html2 = '<header>\n\
\t<img>\n\
\t<nav>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t\t<a></a>\n\
\t</nav>\n\
</header>';
console.log(html2);

const html3 = '\
<header>\r\
    <img>\r\
    <nav>\r\
        <a></a>\r\
        <a></a>\r\
        <a></a>\r\
    </nav>\r\
</header>';

console.log('-------------------');
console.log(html3);


console.clear()

const studentName = 'Maryte';
const amount = 4



//tekstines reiksmes inicijavimas 
//' - (vienguba kabute)
//" - (dviguba kabute)
//` - bactick

const b1 =  ` ' (vienguba kabute)`
console.log(b1);

const b2 = `" - (dviguba kabute)`
console.log(b2);



const b7 = `<header>
    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>
    </nav>    
</header>`;
console.log(b7);

// Maryte yra viena is 4 legendiniu studentu.

const student = studentName + " yra viena/s is " + amount + ' legendiniu studentu'
console.log(student)


const student2 = `${studentName} yra viena/s is ${amount} legendiniu studentu.`
console.log(student2);


console.clear()

const word = 'gg';
const wordSymbolsCount = word.length;

console.log(word, wordSymbolsCount);

// .length;  .length; .length;  .length;  .length;


const age = 99
const ageDigitsCount = ('' + age).length
console.log(ageDigitsCount);

const ageDigitsCount2 = age.toString().length;

console.log(ageDigitsCount2);

// .toString  .toString  .toString  .toString

const text = 'kebabas'
const firstSymbol = text[0];
 console.log(firstSymbol);
 

 console.log(text[1]);
 console.log(text[2]);
 console.log(text[3]);
 console.log(text[4]);
 console.log(text[5]);
 console.log(text[6]);
 console.log(text[7]);
 console.log(text[8]);

 //Zodyje "Sachmatai" pirmoji raide yra s.
 const game = "Sachmatai";
 const gameSentenc = `Zodyje "${game}" pirmoji raide yra "${game[0]}".`

 console.log(gameSentenc);
 
 