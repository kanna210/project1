let registerForm = document.getElementById("registerForm");

if (registerForm){
    registerForm.addEventListener('submit', register);
}

function register(e) {
    e.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordRepeat = document.getElementById("psw-repeat").value;

    let user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordRepeat: passwordRepeat
    };
    console.log(user)
}

//login
let loginForm = document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener('submit', login);
}

function login(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        email: email,
        password: password
    };
    console.log(user);
}
