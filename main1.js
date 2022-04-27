const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
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