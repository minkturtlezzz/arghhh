function validateForm() {
    var arr = document.getElementsByTagName('input');
    var name =arr[0].value;
    var age =arr[1].value;
    var phone =arr[2].value;
    var pass =arr[3].value;
    var re_pass =arr[4].value;
    if(name == "" || age == "" || phone == "" || pass == "" || re_pass == ""){
        alert("Bạn không được bỏ trống");
        return;
    }
if (isNaN(age)){
    alert("Độ tuổi và Số điện thoại cần điền số");
    return;
}
if (isNaN(phone)){
    alert("Độ tuổi và Số điện thoại cần điền số");
    return;
}

}   



const register = document.querySelector("#register");
var totalEmail = JSON.parse(localStorage.getItem('email'));
var totalPass = JSON.parse(localStorage.getItem('pass'));
if (totalEmail == null) {
    var totalEmail = [];
    var totalPass = [];
}
register.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rePass = document.getElementById('re-pass').value;

    if(password.length < 8) {
        alert('Password must be longer than 8 characters!');
    }
    else if(password != rePass) {
        alert('Password must be the same re-password!');
    }
    else if(totalEmail.indexOf(email) >= 0){
        alert('Email already in use!');
    }
    else {    
        totalEmail.push(email);
        totalPass.push(password);
        localStorage.setItem('email',JSON.stringify(totalEmail));
        localStorage.setItem('pass',JSON.stringify(totalPass));
        location.replace("Login.html");
    }
})



