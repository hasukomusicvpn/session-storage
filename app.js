function getInfo(){
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    sessionStorage.setItem("username", username.value);
    sessionStorage.setItem("password", password.value);
}