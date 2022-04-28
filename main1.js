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
//recursiva(numeritos);

function isObject(subject){
    return typeof subject == "object";
}
function isArray(subject){
    return Array.isArray(subject);
}

//funcion que aplica recursividad para copiar un objeto a otro ingluyendo sus funciones
//y que cuando se afecta una propiedad de uno no se afecte la del otro
function deepCopy(subject){
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if(subjectIsArray){
        copySubject = [];
    } else if (subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }

    for(key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray){
                copySubject.push(subject[key])
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia:{
        twitter: undefined,
        instagram: undefined,
        facebook: undefined
    }
};

const nibia = deepCopy (studentBase);
Object.seal(nibia);
nibia.name = "nibia"
// Object.defineProperty(nibia,"name",{
//     value: "nibia",
//     configurable: false
// })
