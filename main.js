let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar')
let header = document.querySelector('.header')

menu.onclick = () => {
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
}


let open_login = document.querySelector('.ri-user-fill')
let close_login = document.querySelector('.ri-close-circle-line')

// switch login register
let containerLogin = document.querySelector('.container')
let login_box = document.querySelector('.login-box')
let go_login_link = document.querySelector('.go-login-link')
let go_register_link = document.querySelector('.go-register-link')


close_login.addEventListener('click',() => {
   containerLogin.classList.add('active-popup')
})

open_login.addEventListener('click',() => {
   containerLogin.classList.remove('active-popup')
})

go_register_link.addEventListener('click',() => {
   login_box.classList.add('active')
})

go_login_link.addEventListener('click',() => {
   login_box.classList.remove('active')
})

const blurHeader = () => {
   this.scrollY < 100 ? header.classList.remove('blur-header') : header.classList.add('blur-header');
}

window.addEventListener('scroll',blurHeader)