

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



function getUserdata(callback){
    setTimeout(() => {
    const user = {id: 1 ,name: "john smith"};
     callback(user)
    }, 1000);
}
console.log("hello world")

getUserdata(function (user){
    console.log(user)
});

