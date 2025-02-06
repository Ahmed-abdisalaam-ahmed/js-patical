// const header = document.getElementById('header')

// console.log(header)

// const decs = document.getElementsByClassName('decs')[1]

// console.log(decs)

// const button = document.getElementsByTagName('button')[0]

// console.log(button)

const header = document.querySelector('#header')

console.log(header)

const text = document.querySelector('.decs')

console.log(text)

const button = document.querySelectorAll('button')

console.log(button)

//diffrence of notelist and element

function contenttext (){
  
    header.textContent = "Hello world my brother"

}

function changeElement (){

    text.innerHTML = `Wellcome to my Website  <strong>be happy  to my website<\strong>`

}

