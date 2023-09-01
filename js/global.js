var logIn = document.querySelector('#log-in');
var signUp = document.querySelector('#sign-up');
var privacy = document.querySelector('#privacy');
var term = document.querySelector('#term');
var globalMainLogin = document.querySelector('.global-main--login');
var dark = document.querySelector('.header-dark');
var loginBtn = document.querySelector('.login-btn');
var globalLoginComp =document.querySelector('.global-login--comp');
var compBtn = document.querySelector('.comp-btn');
var update = document.querySelector('.update');
var footerItem = document.querySelectorAll('.footer-item')
var reserve = document.querySelector('.reserve')
var headerCart = document.querySelector('.header-cart')


logIn.addEventListener('click', () =>{
    globalMainLogin.classList.add('login-active');
    dark.style.cssText='opacity: 1; z-index: 500';
})

signUp.addEventListener('click', () =>{
    update.classList.add('login-active');
    dark.style.cssText='opacity: 1; z-index: 500';
})

headerCart.addEventListener('click', () =>{
    update.classList.add('login-active');
    dark.style.cssText='opacity: 1; z-index: 500';
})

loginBtn.addEventListener('click', () =>{
    globalMainLogin.classList.remove('login-active');
    globalLoginComp.classList.add('login-active');
})

compBtn.addEventListener('click', () =>{
    globalLoginComp.classList.remove('login-active');
    dark.style.cssText='opacity: 0; z-index: -100';
})

dark.addEventListener('click', () =>{
    globalMainLogin.classList.remove('login-active');
    globalLoginComp.classList.remove('login-active');
    update.classList.remove('login-active');
    dark.style.cssText='opacity: 0; z-index: -100';
})

privacy.addEventListener('click', () =>{
    update.classList.add('login-active');
    dark.style.cssText='opacity: 1; z-index: 500';
})
term.addEventListener('click', () =>{
    update.classList.add('login-active');
    dark.style.cssText='opacity: 1; z-index: 500';
})




// var dark = document.querySelector('#screen-dark');
// var login = document.querySelector('')