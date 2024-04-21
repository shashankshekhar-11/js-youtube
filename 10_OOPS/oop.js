const user={
    username: 'Shashank',
    loginCount:9,
    signedIn: true,

    getUserDetails : function(){
        // console.log("Got user details from DB");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("Shashank ", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

/* new keyword steps 
1- new object created
2- constructor is called
3-this injected
*/