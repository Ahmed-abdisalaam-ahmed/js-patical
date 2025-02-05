

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

// function fetchsylData (){
//     return new Promise ((Resolve , Reject) => {
//         setTimeout(() => {
//             const Secceses = false;
//             if (Secceses){
//                 Resolve({id: 1 , name:"ahmed shehab"})
//             }
//             else{
//                 Reject("the fetch data is failed")
//             }
//         },3000)
//     })
// }
// fetchsylData()
//     .then((data)=> console.log("User Data" , data))
//     .catch((err)=> console.log("Error", err))

// async function DisplayDatafetch() {
//     try{
//         const user = await(fetchsylData())
//         console.log(user)
//     }
//    catch(err){
//     console.log("Error",err)
//    }
// }
// DisplayDatafetch()


// function usercheck(){
//     return new Promise((Resolve , Reject)=>{
//         setTimeout(()=>{
//             const password = 0
//         },3000)
//     })
// }

// JSON 

// Json to object
// object to json

// let Student = {
//     id:1,
//     name:"ahmed",
//     age:"12"
// }

// const jsonstring = JSON.stringify(Student) 
// console.log(jsonstring);

// const ChangeJson = JSON.parse(jsonstring)

// console.log(ChangeJson)



// fetch json and Api
// async function fetchJson(){
//     console.log("the fetching is starting.........");
    
//     const Reponse = await fetch('data.json');

//     const data = await Reponse.json()

//     // const changejson = JSON.stringify(data)
    
//     console.log("Respons", data)
// }

// fetchJson()

// function opertion(a, b, callback){
//     return callback(a,b)
// }

// function addtion(a , b){
//     return a + b
// }

// function Subtration(a , b){
//     return a - b
// }
// console.log("addition", opertion(12 ,22,addtion));
// console.log("Subtraction", opertion(12 ,22,Subtration));

// function greet(callback){
//     console.log("HELLO, ", name)
// }

// function proceesUser(){
    
// }


// HTTP REQUAST 

// Get 
// Post 
// Upadate
// delete

// GET

// async function fetchData() {
//     try {
//         console.log("the fetch Data is Starting .........")

//         const respone = await fetch('https://jsonplaceholder.typicode.com/posthhs/1')

//         // Get HTTP request
//         if(!respone.ok){
//           throw new Error (`HTTP Status error !Status ${respone.status}`)
//         }
//         const data = await respone.json();

//         console.log(data)

//     }
//     catch(err){
//       console.log(err)
//     }
// }
// fetchData()

// Post

async function postdata(){

  try{
    const respone = await fetch ('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        title:"what is this in title ",
        body: "this body ar in go to post",
        userId: 1
      })
    })

if (!respone.ok){
  throw new error (`HTTP ERROR !Status${Response.status}`)
}

//
  console.log('before   ',respone)
console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")
const data = await respone.json()

  console.log('after   ',data)
}
  catch(error){
    console.log(error)
  }
}
postdata()