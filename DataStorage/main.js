const ToggleButton = document.querySelector('#toogle-btn');

ToggleButton.addEventListener('click', switchmode);

function switchmode(){
    document.body.classList.toggle('darkmode');
    ToggleButton.classList.toggle('darkmode');

    if(document.body.classList.contains('darkmode')){
        ToggleButton.textContent = "light mode";

        localStorage.setItem("mode","dark");
    }
    else{
        ToggleButton.textContent = "dark mode";

        localStorage.setItem("mode", "light");
    }
}

window.addEventListener("DOMContentLoaded", function(){
    // local storage checking

    const savemode = localStorage.getItem("mode");
    // console.log(savemode)

    if(savemode === "dark"){
        document.body.classList.add("darkmode");
        ToggleButton.classList.add("darkmode");
        ToggleButton.textContent = "light mode"
    }else{
        ToggleButton.textContent = "dark mode"
    }

})