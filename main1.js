const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    },
    editA(){
        this.a = "AAAAAA"
    }
};

const obj2 = {};
//no funciona cuando hay un propiedad que es objeto
for (prop in obj1){
    obj2[prop] = obj1[prop];
}

//mismo problema que con el FOR
const obj3 = Object.assign({},obj1);

//crea un nuevo objeto le hereda las propiedades del obj1 al obj4 dentro del __proto__, pero tampoco funciona
//con objetos dentro objetos
//si editamos las propiedades desde la copia no se afecta al original, pero desde el original si afecta a la copia
const obj4 = Object.assign(obj1);

//estos metodos permiten copiar las propiedades perfectamente asi tenga objetos dentro pero no copia los metodos
const stringFieldComplex = JSON.stringify(obj1);
const obj5 = JSON.parse(stringFieldComplex);

// ********* recursividad ***********
// function recursiva (){
//     if(/*validacion  */){
//         //lamados recursivos 
//     } else {
//         //lamados normales, sin recursividad
//     }
// }

 const numeritos = [0,1,2,3,4,5,77777]
// let numerito = 0;
// for(let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[index];
//     console.log({index, numerito})
// }

function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum)
        numbersArray.shift();
        return recursiva (numbersArray);
    }
}
recursiva(numeritos);