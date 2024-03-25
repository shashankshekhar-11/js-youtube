function sayMyName(){
    console.log('S');
    console.log('H');
    console.log('I');
    console.log('V');
    console.log('A');
    console.log('M');
}
//sayMyName()



// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }


function addTwoNumber(number1,number2){
    
    let result= number1+number2
    return result
}
const result= addTwoNumber(3,5)

//console.log("result", result);

function loginUserMessage(username='Sam'){
    if (!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

// ...val1 is called rest operator
function calculateCartPrice(val1,val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //val1=200, val2=400 and rest in  ...num1 

const user ={
    username:"Shashank",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    username:"Sam",
    price:299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));