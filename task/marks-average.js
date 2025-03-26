function marksAverage(list){
    // patikriname ar gavome masyva
    //sumuojame visus skaicius ir kieki:
    let sum = 0
    let count = 0
    // einame per visa masyva ir imame kiekviena skaicius
    //jei sutinkame ne skaiciu tai ji ignoruojame
    //[10,2,'n']
    //jei sutinkame skaiciu, padidiname suma ir kieki
    // jei sutinake skaiciu,kuris nera sveikasir nera intervale nuo 1 iki 10 (imtinai)tai ignoruojame
return sum/count
}
console.log(marksAverage([]));
console.log(marksAverage(['labas']));
console.log(marksAverage([true]));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage([2,3,7,9,6,1,4,5,8,]));
console.log(marksAverage([2,10,8,4,6]));
console.log(marksAverage([2,'n',8,4,6]));
console.log(marksAverage([2,'n','n',4,6]));


