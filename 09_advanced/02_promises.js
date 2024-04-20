const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB task ,cryptography,network
    setTimeout(function(){
        console.log("Async task completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async task 2 resolved');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Shashank",email:"abc@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Shashank",passsword:"1234"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})

const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript",passsword:"1234"})
        }
        else{
            reject('JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()


// async function getAllUsers (){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    }catch(error){
//     console.log("E:",error);
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/octocat')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))