/*
Reikalinga funkcija, kiuri gauna teksta, kuri grazina rezultata,priklasomai nuo teksto ilgio.
- jei tuscias: "tuscias tekstas"
- tei maziau 10 simboli : "trumpas testas is N simboliu."
- jei maziau nei 20 simboliu : "Tekstas is N simboliu."
- jei ilgesnis : "ilgas teskstas is N simboliu."

*/

function textSize(text){
    if(text.length === 0)
return "tuscias tekstas"
 else if(text.length < 10)
return `trumpas testas is ${text.length} simboliu`
else if (text.length < 20)
    return `Tekstas is ${text.length} simboliu.`
else (text.length > 20)
return `ilgas teskstas is ${text.length} simboliu.`


}
console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labas rytas Lietuva, katu?s'));


function textSize2 (){
 if(text.length === 0)
return "tuscias tekstas"
 if(text.length > 0 && text.length < 10)
return `trumpas testas is ${text.length} simboliu`
 if(text.length >= 10 && text.length < 20)
return ` testas is ${text.length} simboliu`
 else (text.length >= 20)
return `ilgas teskstas is ${text.length} simboliu.`
}

console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labas rytas Lietuva, katu?s'));



