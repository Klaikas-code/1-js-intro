/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai
- && - and (ir) 
- || - or (arba)
*/

const isEven =true;
const isOdd = false;




console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(`ar mergina eis i pasimatyma`)
const arGrazus = true
const arTurtingas = true

console.log(arGrazus && arTurtingas);

console.clear();
// skaiciavimo eiliskumas,, is pradziu skaiciuoja && , po to tik ||
console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && false);
console.log(4, true || false && true);
console.log(5, false || true && false);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

// !!!! ND susaryti visas imanomas kombinacijas, su && ir || kai yra naudojamos 4 boolean reiksmes.
// !!!! ND kiek gavosi kombinaciju 
