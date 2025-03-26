

//1. Patikrinkite, ar sąraše yra tam tikras skaičius.
//a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3

const skaiciai = [1,2,3,4]

function findNumber(){
    if (skaiciai[0]===3||skaiciai[1]===3||skaiciai[2]===3||skaiciai[3]===3)
console.log('Sarase yra skaicius 3' );
else console.log('Skaiciau 3, sarase nera');


}
findNumber(skaiciai)
console.clear();

//2. Patikrinkite, ar masyvas tuščias.
//a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias

const tuscia = [5,4,7]

function sarasoIlgis(){
if (tuscia.length === 0)
    console.log('Saras tuscias.');
else console.log('Saras ne tuscias');

}

sarasoIlgis(tuscia)

console.clear();

//3. Nustatyti, ar sąraše yra teigiamas skaičius.
//a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių.

const teigiamiNeigiami = [1,-2,3,-4]

function findNegative(){
    if (teigiamiNeigiami[0] >= 0)
        console.log(`Skaicius ${teigiamiNeigiami[0]},yra teigiamas`);
    if (teigiamiNeigiami[1] >= 0)
        console.log(`Skaicius ${teigiamiNeigiami[1]},yra teigiamas`);
    if (teigiamiNeigiami[2] >= 0)
        console.log(`Skaicius ${teigiamiNeigiami[2]},yra teigiamas`);
    if (teigiamiNeigiami[3] >= 0)
        console.log(`Skaicius ${teigiamiNeigiami[3]},yra teigiamas`);
        else "Teigiamu skaiciu nera"
       
}

findNegative(teigiamiNeigiami)

console.clear();

//4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai.
//a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai.

const lyginiai = [2,4,6]

function arLyginiai(){
if (lyginiai[0]/2===)


}