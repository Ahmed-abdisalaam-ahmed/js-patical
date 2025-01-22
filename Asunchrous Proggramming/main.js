

// function alldatasyce(){
//     alert("fetch starting now.......")
//     return {id: 1 ,name: "john smith"};
// }
// console.log("fetch switching Now ")

// const User = alldatasyce();
// console.log("the data", User);

// console.log("the fetch data user is finished");

// synochronous - Blocking 
// Asynochronous - non-blocking 



// function getUserdata(callback){
//     setTimeout(() => {
//     const user = {id: 1 ,name: "john smith"};
//      callback(user)
//     }, 1000);
// }
// console.log("hello world")

// getUserdata(function (user){
//     console.log(user)
// });


// unblocking
// function student (){
//     alert("warfaa waad soo dahday, Dhakhso Ok taabo!")
//     return {id :1, name: "mohammed", age:17}
// }
// console.log("the proccess is starting ........");

// const list = student()
// console.log("Now can you see the list",list);

// console.log("finished");

// block
// function student(callback){
//     setTimeout(() =>{
//         const login = {id :1, name: "mohammed", age:17}
//         callback(login)
//     },3000);
// };
// console.log("the proccess is starting ........");

// student(function(user){
//     console.log("Now can you see the list",user);
// })

// console.log("finished");

function fetchsylData (){
    return new Promise ((Resolve , Reject) => {
        setTimeout(() => {
            const Secceses = false;
            if (Secceses){
                Resolve({id: 1 , name:"ahmed shehab"})
            }
            else{
                Reject("the fetch data is failed")
            }
        },3000)
    })
}
fetchsylData()
    .then((data)=> console.log("User Data" , data))
    .catch((err)=> console.log("Error", err))