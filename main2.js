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
    return {
        name,
        email,
        age,
        approvedCourses,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook
        }
    };
}

const data = createStudent();

// const dana = createStudent({
//     name: "juanito",
//     age: 18,
//     email: "jj",
//     twitter: "migu"
// });