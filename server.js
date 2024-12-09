// function callback(c,d){
//     console.log("Adding Completed"); 
//     console.log("Now Substraction----")
//     let ans=d-c;
//     console.log("result: "+ans)
//     console.log("Substraction Completed"); 

// }

// const add=function(a,b,callback){
//     console.log("Addition:------")
//     let res=a+b;
//     console.log('result: '+ res)
//     callback(2,7)
// }

// add(8,378,callback)



// const add=function(a,b,callback){
//     console.log("Addition:------")
//     let res=a+b;
//     console.log('result: '+ res)
//     callback(2,7)
// }

// add(8,378,(c,d)=>{
//     console.log("Adding Completed"); 
//     console.log("Now Substraction----")
//     let ans=d-c;
//     console.log("result: "+ans)
//     console.log("Substraction Completed"); 
// })


// var fs=require('fs');
// var os=require('os');

// let user=os.userInfo();
// console.log(user)

// fs.appendFile('welcome.txt', 'Welcome'+ user.username +'!! \n',()=>{
//     console.log('file created');
// });
 
var _ = require('lodash');

const note = require('./note.js');
let res=note.age
console.log(res)

let ans=note.add(res,45)
console.log(ans)

let data=['person','person','2',5,4,'2','home','home']

let filter=_.uniq(data)
console.log(filter)
