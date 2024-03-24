// const tinderUser = new Object ()
    const tinderUser ={}

    tinderUser.id="123abc"
    tinderUser.name="Shashank"
    tinderUser.isLoggedIn= false

    //console.log(tinderUser);

    const regularUser ={
        fullName:{
            userfullname:{
                firstname: "Shashank",
                lastname: "Shekhar"

            }
        }
    }

    //console.log(regularUser.fullName?.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"5"}
//const obj3 ={obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // {} is called target(empty obj here) and obj1 and obj2 are sources........ agar {} nahi doge to sari values obj1 me copy hongi



const obj3 ={...obj1,...obj2} //... is called spread operator
//console.log(obj3);


const users=[
    {
        id:1,
        email:"us1@gamil.com"
    },
    {
        id:2,
        email:"us2@gamil.com"
    },
    {
        id:3,
        email:"us3@gamil.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//.......................................DESTRUCTURING..................................
const course ={
    courseName :"js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const{courseInstructor : instructor}= course

//console.log(courseInstructor);
console.log(instructor);
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// [
//     {},
//     {},
//     {}
// ]