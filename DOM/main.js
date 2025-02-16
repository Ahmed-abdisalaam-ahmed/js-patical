// // const header = document.getElementById('header')

// // console.log(header)

// // const decs = document.getElementsByClassName('decs')[1]

// // console.log(decs)

// // const button = document.getElementsByTagName('button')[0]

// // console.log(button)

// const header = document.querySelector('#header')

// console.log(header)

// const text = document.querySelector('.decs')

// console.log(text)

// const button = document.querySelectorAll('button')

// console.log(button)

// //diffrence of notelist and element

// function contenttext (){
  
//     header.textContent = "Hello world my brother"

// }

// function changeElement (){

//     text.innerHTML = `Wellcome to my Website  <strong>be happy  to my website<\strong>`

// }


const list = document.getElementById('list')

function additem(){
    
    const newitem = document.createElement('li')
    newitem.textContent = 'new item'

    list.appendChild(newitem)
}

function RemoveItem(){

    if(list.lastChild){
        list.removeChild(list.lastChild)
    }
    else{
        alert("ka baxee dee maxaa ku daagay!")
    }

}

// setAttribute Element : set a value of an attribute 

function ChangeImage(){

    const change = document.querySelector('#IDimage')

    const url = prompt("enter the address of image")

    change.setAttribute('src', url)

}


// setAttribute style 

function changestyle(){

    const header = document.querySelector('#header')
    const text = document.querySelector('.text')

    header.style.color = "skyblue";
    text.style.fontSize = "20px";
    text.style.border = "1px solid black";
    text.style.padding = "20px";
    text.style.backgroundColor = "purple";
}

function setWhitemode(){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = "black"
}
function setDarkmode(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = "white";
}
