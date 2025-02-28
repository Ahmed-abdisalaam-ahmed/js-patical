const form = document.querySelector("#registrotion");

const username = document.querySelector("#username");
const Email = document.querySelector("#Email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#ConfirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (Event) {
  Event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const isUsernamevalid = validUsername();
  const isEmailvalid = validEmail();
  const ispasswordvalid = validPassword();
  const isconfirmpassword = validConfirm();

  if(!isUsernamevalid){
    username.focus();
    return
  }
  else if(!isEmailvalid){
    Email.focus();
    return
  }
  else if(!ispasswordvalid){
    password.focus();
    return
  }
  else if(!isconfirmpassword){
    confirmpassword.focus();
    return
  }

  const saxiix = success.textContent = "registor is successfully!";
  alert(saxiix)
});

// username

function validUsername() {
  if (username.value.trim() === "") {
    setError(username, "Username is not reqiued");
    return false;
  } else {
    setSuccess(username);
    return true;
  }
}
// Email
function validEmail() {
  const Emailpattens = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!Email.value.match(Emailpattens)) {
    setError(Email, "Email is not correct ,try again!");
    return false;
  } else {
    setSuccess(Email);
    return true;
  }
}

// Password

function validPassword() {
  if (password.value.length < 8) {
    setError(password, "password has be 8 characters");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

// Confirm password

function validConfirm() {
    if (confirmpassword.value.trim() === '' || password.value.trim()=== ''){
    setError(confirmpassword, "make password same");
    return false;
  } else {
    setSuccess(confirmpassword);
    return true;
  }
}
//
function setError(element, message) {
  element.classList.add("invalid");
  element.classList.remove("valid");

  error.textContent = message;
}

function setSuccess(element) {
  element.classList.add("valid");
  element.classList.remove("invalid");
}
