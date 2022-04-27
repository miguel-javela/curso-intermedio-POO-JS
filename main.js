const juan = {
    name: "juanito",
    age: 18,
    aprovedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log("this",this)
        console.log("this.approvedCourses",this.aprovedCourses)
        this.aprovedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));//lista los atributos y propiedades
console.log(Object.getOwnPropertyNames(juan));//parecido al anterior

console.log(Object.entries(juan));//array de arrays con keys y su valor
//Object.entries(juan)[3][1]("curso 3") //esto arroja error porque this ya no hace referencia al objeto
//this en este caso hace referencia al array dentro del array

console.log(Object.getOwnPropertyDescriptors(juan));//retorna un objeto con las propiedades del objeto juan,
//donde cada propiedad es un objeto

//definir nuevas propiedades al objero juan pero con la posiblidad de editar las propiedades configurable
//enumerable entre otras
Object.defineProperty(juan, "pruebaNASA",{
    value: "extraterrestres",
    writable: "true",
    enumerable: "true",
    configurable: "true"
})