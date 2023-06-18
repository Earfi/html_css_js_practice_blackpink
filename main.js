let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar')

let open_login = document.querySelector('.ri-user-fill')
let close_login = document.querySelector('.ri-close-circle-line')
let login = document.querySelector('.login')

menu.onclick = () => {
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
}

close_login.addEventListener('click',() => {
   login.classList.remove('active')
})

open_login.addEventListener('click',() => {
   login.classList.add('active')
})