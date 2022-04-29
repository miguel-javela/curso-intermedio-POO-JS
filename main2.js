function requiredParam (param){
    throw new Error(param + " es obligatorio");
}

function isArray(subject){
    return Array.isArray(subject);
}

function LearningPath ({
    name = requiredParam("name"),
    courses = [],
}){
    this.name = name;
    this.courses = courses;

    // const private = {
    //     "_name": name,
    //     "_courses": courses,
    // };

    // const public = {
    //     get name(){
    //         return private["_name"];
    //     },
    //     set name (newName){
    //         if(newName.length != 0){
    //             private["_name"] = newName;
    //         } else {
    //             console.warn("tu nombre debe tener al menos 1 caracter")
    //         }
             
    //     },
    //     get courses(){
    //         return private["_courses"];
    //     },

    // };

    // return public;
}

function Student({
    name = requiredParam("name"),
    age,
    email = requiredParam("email"),
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = []
} = {}){
    this.name = name;
    this.email =email;
    this.age = age;
    
    this.approvedCourses = approvedCourses;
    this.socialMedia =  {
        twitter,
        instagram,
        facebook
    };

    const private = {
        "_learningPaths": []
    }

    Object.defineProperty(this,"learningPaths",{
        get (){
            return private["_learningPaths"];
        },
        set (newLp){ 
            if(newLp instanceof LearningPath){
                private["_learningPaths"].push(newLp);
            } else {
                console.warn("alguno de los LPs no es una instancia del prototipo LearningPath")
            }
        }  
    });    

    for (learningPathIndex in learningPaths){
        this.learningPaths = learningPaths[learningPathIndex]
    } 

    // const private = {
    //     "_name": name,
    //     "_learningPaths": learningPaths
    // };
    // const public = {
    //     email,
    //     age,
    //     approvedCourses,
    //     socialMedia: {
    //         twitter,
    //         instagram,
    //         facebook
    //     },
    //     get name(){
    //         return private["_name"];
    //     },
    //     set name (newName){
    //         if(newName.length != 0){
    //             private["_name"] = newName;
    //         } else {
    //             console.warn("tu nombre debe tener al menos 1 caracter")
    //         }
             
    //     },
    //     get learningPaths(){
    //         return private["_learningPaths"];
    //     },
    //     set learningPaths (newLp){
    //         if(!newLp.name){
    //             console.warn("tu LP no tiene nombre");
    //             return;
    //         }
    //         if(!newLp.courses){
    //             console.warn ("Tu LP no tiene courses")
    //             return;
    //         }
    //         if(!isArray(newLp.courses)){
    //             console.warn ("tu Lp no es una lisa de cursos")
    //             return;
    //         }
    //         private["_learningPaths"].push(newLp);             
    //     }
    //     // readName(){
    //     //     return private["_name"];
    //     // },
    //     // changeName(newName){
    //     //     private._name = newName;
    //     // }     
    // }
    // //esto evitaria aplicar polimorfismo
    // // Object.defineProperty(public,"readName",{
    // //     writable:false,
    // //     configurable:false
    // // });
    // // Object.defineProperty(public,"changeName",{
    // //     writable:false,
    // //     configurable:false
    // // });
    // return public;
}

//const data = createStudent();
const a = new LearningPath({name: "a", courses: []});
const b = new LearningPath({name: "b", courses: []});

const dana = new Student({
    name: "dana",
    email: "jj",
    learningPaths: [
        a,b,
        {
            name: "impostor",
            courses: []
        }
    ]
});



