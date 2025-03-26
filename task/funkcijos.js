/*
Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false

Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;




*/

function tusciaFunkcija(tuscia){
return "false"

}
console.log(tusciaFunkcija(10));

console.clear();

function daugyba(a, b){
    if(typeof a !== 'number'){
        return "pirmasis parametras turi buti skaicius"}
    if(typeof b !== 'number'){
        return "antrasis parametras turi buti skaicius"
    }
    if (isNaN(a)){
return "pirmasis parametras nera normalus skaicius"}
 
    if (isNaN(b)){
return "angtrasis parametras nera normalus skaicius"}
 
    

  return a*b;
}

console.log(daugyba(2, 2));
console.log(daugyba(7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, -5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -0));
console.log(daugyba(0, 5));
console.log(daugyba(0, -5));
console.log(daugyba(0, "labas"));
console.log(daugyba("okay", -5));
console.log(daugyba(NaN, -5));
console.log(daugyba(6, NaN));
console.log(daugyba(NaN, NaN));

console.log(daugyba(2,25));
console.log(daugyba(2, Infinity));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(-Infinity, Infinity));

