const user = {
    username: "Shashank",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// global object in browser is window
//console.log(this);

// function chai(){
//     let username="Shashank"
//     console.log(this);
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
     let username = "hitesh"
     console.log(this.username);
 }

 //chai()

 //....................................Arrow Functions............................

 // const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  // implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Shashank"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()