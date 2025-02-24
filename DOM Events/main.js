// addEventListener & removeEventListener

const btn = document.querySelector('#btn1')
const btn1 = document.querySelector('#btn2')

function handfiled(){
    console.log("the button is click it")
}
btn.addEventListener('click' , handfiled)

btn1.addEventListener('click', function(){
    btn.removeEventListener('click' , handfiled);
    console.log("the Button is Removed");
})

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

// const from = document.querySelector("#registrotion");

// from.addEventListener("submit", function (Event) {
//   Event.preventDefault();

//   const username = document.querySelector('#username').value;
//   const Email = document.querySelector('#Email').value;
//   const password = document.querySelector('#password').value;
//   const ConfirmPassword = document.querySelector('#ConfirmPassword').value;

//   const error = document.querySelector("#error");

 

//   // username

//   if (username ==='') {
//     error.textContent = 'username is required';
//     return; //code-kan meesha ku joooji
//   }

//   const EmailConfig = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   if(!Email.match(EmailConfig)){
//     error.textContent = 'Email is Not Correct'
//     return;
//   }

//   if(password.length < 8){
//     error.textContent = "Password must to 8 character"
//     return
//   }
//   if(password !== ConfirmPassword){
//     error.textContent = 'password is not matching ..'
//     return;
//   }

//   error.textContent = 'register is seccessfully';
// });
