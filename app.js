const login = document.querySelector("#login");
var totalEmail = JSON.parse(localStorage.getItem('email'));
var totalPass = JSON.parse(localStorage.getItem('pass'));
console.log(totalEmail);
console.log(totalPass);
login.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if((totalEmail.indexOf(email) == -1) || (totalPass.indexOf(password) == - 1)){
        alert('Email or Password incorrect!');
    }
    else {
        location.replace("Main_2.html");
    }
})