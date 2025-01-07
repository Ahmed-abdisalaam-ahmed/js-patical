const fruit = ["apple","banana","suqaar"];

fruit.forEach((fruit)=>{
    console.log('i like ' + fruit);
})


let student = [
    {
     id : 1,
     name: "ahmed",
     age :18,
     grade:"9A"
    },
    {
     id : 2,
     name: "jamman jimcale",
     age :20,
     grade:"9b"
    },
    {
     id : 3,
     name: "ali said sonkor",
     age :15,
     grade:"8A"
    }
];
student.forEach((student)=>{
    // console.log(student)
        console.log("---------------")
        for(const key in student){
        console.log(student[key])
        }
})