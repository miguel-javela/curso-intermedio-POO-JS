function requiredParam (param){
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}){
    const private = {
        "_name": name
    };
    const public = {
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        },
        readName(){
            return private["_name"];
        },
        changeName(newName){
            private._name = newName;
        }
        
    }
    //esto evitaria aplicar polimorfismo
    Object.defineProperty(public,"readName",{
        writable:false,
        configurable:false
    });
    Object.defineProperty(public,"changeName",{
        writable:false,
        configurable:false
    });
    return public;
}

const data = createStudent();

// const dana = createStudent({
//     name: "juanito",
//     age: 18,
//     email: "jj",
//     twitter: "migu"
// });