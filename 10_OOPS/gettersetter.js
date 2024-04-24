class User{
    constructor(email,password){
        this.email= email;
        this.password= password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }
    get password(){
        return (`${this._password}abc`)
    }
    set password(value){
        this._password = value
    }
}

const shashank = new User("shashank@ai","shekhar")
console.log(shashank.email);
console.log(shashank.password);