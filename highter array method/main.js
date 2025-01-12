// // FOREach


// const fruit = ["apple","banana","suqaar"];

// fruit.forEach((fruit)=>{
//     console.log('i like ' + fruit);
// })


// let student = [
//     {
//      id : 1,
//      name: "ahmed",
//      age :18,
//      grade:"9A"
//     },
//     {
//      id : 2,
//      name: "jamman jimcale",
//      age :20,
//      grade:"9b"
//     },
//     {
//      id : 3,
//      name: "ali said sonkor",
//      age :15,
//      grade:"8A"
//     }
// ];
// student.forEach((student)=>{
//     // console.log(student)
//         console.log("---------------")
//         for(const key in student){
//         console.log(student[key])
//         }
// })

// // Map

// const number = [1,2,3,4,5,6,7];

// const forNumber = number.map((number)=> number*2)
// console.log(forNumber)


// const fruit = ["apple","banana","jerry"];
// const lenght = fruit.map((fruit)=>fruit +" "+ fruit.length)
// console.log("this fruits is "+ lenght)


// filter

// const eventNumber = [0,1,2,3,4,5,6,7,8]
// const Number = eventNumber.filter((eventNumber)=> eventNumber % 2===0);

// console.log(Number);

// const scoreGrade = [40,50,60,70,80,90]
// const scored = scoreGrade.filter((scoreGrade)=> scoreGrade >= 60)
// console.log(scored)

// recude

const tirooyin = [200,200,700];
const xisaabid = tirooyin.reduce((iskudarka,tiro)=> iskudarka * tiro,1)
console.log(xisaabid)