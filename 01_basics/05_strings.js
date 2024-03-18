const name="Shashank"
const repoCount=50
//console.log(name + repoCount +" value")


//console.log(`hello my name is ${name} and my repo count is ${repoCount}`) // string interpolation


const gameName = new String('Shashank-FC')
//console.log(gameName)
//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("a"));
 const newString =gameName.substring(0,4);
 console.log(newString)
 const anotherString= gameName.slice(-10,4);
 console.log(anotherString)
 const newStringOne="     space diya hai    ";
 console.log(newStringOne)
 console.log(newStringOne.trim())
const url="https://shashank.com/shashank%20shekhar";
console.log(url.replace("%20","@"))
console.log(url.includes('ank'))


console.log(gameName.split('-'));
