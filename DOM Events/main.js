// addEventListener & removeEventListener

// const btn = document.querySelector('#btn1')
// const btn1 = document.querySelector('#btn2')



// function handfiled(){
//     console.log("the button is click it")
// }
// btn.addEventListener('click' , handfiled)


// btn1.addEventListener('click', function(){
//     btn.removeEventListener('click' , handfiled);
//     console.log("the Button is Removed");
// })


// handling change Event 

// const color = document.querySelector('#color')
// const selctcolor = document.querySelector('#selctcolor')

// color.addEventListener('change', function(){
//     console.log("color is changec",color.value)
//     selctcolor.textContent = `Select color is : ${color.value}`
// })

// const username = document.querySelector('#username')
// const myname = document.querySelector('#myname')

// username.addEventListener('change', function(){
//     console.log(`my name is : ${username.value}`)
//     myname.textContent = `my name is : ${username.value}`
// } )

// preventing defualt

// const myfrom = document.querySelector('#myfrom')
// const soobixid = document.querySelector('#soobixid')

// myfrom.addEventListener('submit', function(Event){

//     Event.preventDefault()
//     console.log("submitted......")
//     soobixid.textContent = `Xogta soo Baxaysa ${myfrom.value}`

// })