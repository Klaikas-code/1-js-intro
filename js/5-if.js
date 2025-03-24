/*
IF - palyginimo operatorius

Palyginimo operatoriai:
- visi: > , <, >=, <=, ==(ar lygu), ===(ar lygu), !=(ar ne lygu), !==(ar ne lygu)
-naudotini:  > , <, >=, <=, ===, !==()
-neaudotini:==, !=

kodo sablonai
if (){}
if(){} else {}
if (){} else if ()
if (){} else if () else
if (){}... else if () ....
if (){} ... else if () ... esle if ()

*/

if (4 > 2) {
console.log(`taip, 4>2`);


}

if(4<2){
console.log(`---taip`);

} else {
    console.log(`----ne`);  
}

console.clear();
const temp = -2

if(temp >= 18){
    console.log(`silta`);
    
} else {
    console.log(`salta`);  
}
console.clear();
const temp2 = -5

 if (temp2 < 0 ){
    console.log(`salta`);
}else if (temp2 < 10){
    console.log(`meh`);
}else if (temp2 < 22){
        console.log(`silta`);
}else {
    console.log(`karsta`);
    
}


console.clear();

const clientValue = 4

if (4 === clientValue){
    console.log('tenkina');
     }
     else {console.log("NE-tenkina");
     }

if (4 === '4'){
        console.log('tenkina');
         }
         else {console.log("NE-tenkina");
         }