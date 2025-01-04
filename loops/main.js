// for loop 
//  for(let i = 0; i < 5; i++){
//     console.log(i)
//  }

//  for(let i = 2; i <= 5; i++){
//     console.log(i)
//  }


//  for(let i = 1; i <=50; i++){
//      console.log(i);
//  }

//  using arrray 

// const student = ["ahmed" , "salma" ,"aisha " ,"ali" , "mohammed"];

// // console.log(student.length)
// for(let i = 0; i < student.length; i++){
//     console.log(student[i])
// };

//  while loop

// let i = 0;

// while (i < 5){
//     console.log("the iternation number " + i)
//     i++
// }

// do while loop


// let i = 10;
// do{
//     console.log("the inernation number " + i)
//     i++
// }while(i < 5)

// password

// let password;
// do {
//     password = prompt("Enter your password");
// }while(password !== "12345")
// console.log("soo dhawoow");


// let password;
// do{
//     password = prompt("Enter GREATER THAN 10")
// }
// //    while(password === "1", "2", "3", "4", "5", "6", "7", "8", "9", "10")
//     while(password === "1,2,3,4,5,6,7,8,9,10")
//    console.log("soo dhawoow")

// let password;
// do {

//     password = prompt("Enter a number greater than 10");

// } while (password < 10);
// console.log("soo dhawoow");

// for Of loop

// const student = ["ahmed","said","ali"];
// for (let students of student){
//     console.log(students);
// }


// const student = "Naima";
// for (let s of student){
//     console.log(s)
// }

// FOR IN LOOP

// const student ={
//     id : "c2",
//     Name: "ahmed",
//     BirthDate : "2002-2-2",
//     Age : 12,
// }
// for (const key in student){
//     console.log(student[key]);
// }

const poeple = [
    {name: "saalax", age: 24 ,city :"london"},
    {name: "abdi", age: 30 ,city :"tokyo"},
    {name: "farxiya", age: 23 ,city :"Hargiasa"}
];

for (let peoples of poeple){
    console.log("---------------")
    for(const key in peoples){
    console.log(peoples[key])
    }
};



