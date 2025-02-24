const form= document.querySelector("#registrotion");

const username = document.querySelector('#username');
const Email = document.querySelector('#Email');
const password = document.querySelector('#password');
const ConfirmPassword = document.querySelector('#ConfirmPassword');

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener('submit', function(Event){

    Event.preventDefault();

    error.textContent = ''
    success.textContent = ''


    const aValidusername = setvalidusername();
    const availdEmail = SetEmailvalidate();
    const ispasswordvalid = Setpasswordvalid();
    const avalidconfirmpassword = setconfirmpassword(); 
    
    if(!aValidusername){
        username.focus()
        return
    }else if(!availdEmail){
        Email.focus()
        return
    }else if(!ispasswordvalid){
        password.focus()
        return
    }else if(!avalidconfirmpassword){
        ConfirmPassword.focus();
        return
    }



    success.textContent = 'registor is successfully!'
});

function setvalidusername(){
    if(username.value.trim() === ''){
        // Error
        SetError(username, 'Username is requid!')
        return false
    }
    else{
        // success
        SetSuccess(username)
        return true
    }
}

function SetEmailvalidate(){
    const EmailConfig = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!Email.value.match(EmailConfig)){
        SetError(Email , 'The email is not correct , try again !');
        return false
    }else{
        SetSuccess(Email)
        return true
    }
}

function Setpasswordvalid(){
    if(password.value.length < 8){
        SetError(password ,'password has be a least 8 characater');
        return false
    }
    else{
        SetSuccess(password);
        return true
    }
}

function setconfirmpassword(){
    if(password.value.trim() === ""  || ConfirmPassword.value.trim() === ""){
        SetError(ConfirmPassword , 'password is not much')
        return false
    }



    if(password.value !== ConfirmPassword.value){
        SetError(ConfirmPassword, 'password is not much')
        return false
    }
    else {
        SetSuccess(ConfirmPassword)
        return true
    }
}




function SetError(element,message){
    element.classList.add('invalid')
    element.classList.remove('valid')

    error.textContent = message;
}

function SetSuccess(element){
    element.classList.add('valid')
    element.classList.remove('invalid')
}