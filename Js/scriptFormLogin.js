const loginText = document.querySelector(".title-login .login")
const loginForm = document.querySelector("form .login")
const loginBtn = document.querySelector("label .login")
const signupBtn = document.querySelector("label .signup")
const signupLink = document.querySelector("form .signup-link a")

signupBtn.onclick=(()=>{
    loginForm.style.marginledtft = "-50%";
    loginText.style.marginledtft = "-50%"; 
});
loginBtn.onclick=(()=>{
    loginForm.style.marginledtft = "-50%";
    loginText.style.marginledtft = "-50%"; 
});