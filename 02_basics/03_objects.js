// two methods of declering objects- "Literal", "constructor"
// Singleton => using constructor eg. object.create


// Object literals

const mySym =Symbol("Key1")
const jsUser ={
    name: "Shashank",
    "full Name": "Shashank Shekhar",
    [mySym] :"myKey1",
    age: 21,
    location : "Sangrur",
    email: "shashank@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["maonday","Saturday"]
}
/*
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(typeof mySym);
console.log(jsUser[mySym]);
*/
jsUser.email="Shashank@sliet.com"
//Object.freeze(jsUser)
//console.log(jsUser);


jsUser.greeting= function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(jsUser.greeting()); //=> gives undefined
console.log(jsUser.greetingTwo());