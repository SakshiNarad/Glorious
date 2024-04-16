var user = document.getElementById("username");
var pass =  document.getElementById("password");
var btn = document.querySelector(".login-button");

function checkvalidity(){
        if(user.value == "" || pass.value ==""){
            alert("Please provide Username & Password ")
        }
    
}

btn.addEventListener("click", checkvalidity)
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});