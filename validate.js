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



