// template  literals 


const name = "ahmed";
const city = "london";

const massege = `Hello ${name}  Wellcome ${city}`;
console.log(massege);


// array Destructuring

const fruits = ["apple","banana","jerry"];
// old way
// const apple = fruits[0];
// const banana = fruits[1];
// const jerry = fruits[2];

// new way 
// const [apple,banana,jerry] = fruits
// console.log(jerry);


// const colors = ["red","blue","orange"];
// const [one , two , three] = colors

// // const messege = `the first ${one} and the third color is ${three}`

// // console.log(messege)

// const students = [
//    {
//     id : 1221,
//     name :"ahmed abdisalam zalah" ,
//     age : 16,
//     birthdate : "12/2/2016"
//    },
//    {
//     id : 1222,
//     name :"animo abdisalam zalah" ,
//     age : 18,
//     birthdate : "12/2/2020"
//    },
//    {
//     id : 1223,
//     name :"moahmed abdisalam zalah" ,
//     age : 15,
//     birthdate : "12/2/2010"
//    },
//    {
//     id : 1224,
//     name :"sakariya abdisalam zalah" ,
//     age : 17,
//     birthdate : "12/2/2012"
//    },
//    {
//     id : 1225,
//     name :"bahja abdisalam zalah" ,
//     age : 13,
//     birthdate : "12/2/2018"
//    }
// ];

// console.log(students[0])
// const [st1222,st1223,st1224,st1225] = students
// const messege = `the first student is ${students}`;
// console.log(messege)


// object Destructuring 

// const car = {make:"Toyato" , model:"corrale" , Year: 2030};

// const {make , model , Year} = car

// const messege = `the car make is ${make} & the model is ${model}`;

// console.log(messege);

// paramentes default 
 
function calculateArea (width = 12,height){
   return width * height 
   // calculateArea()
}
let area = (calculateArea(20));
const messege = `the Area is ${area} `
console.log(messege);



// spreard

const num = [1,2];
const infnum = [...num ,11,33]
console.log(infnum)
