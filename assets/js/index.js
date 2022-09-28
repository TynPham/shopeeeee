const modal = document.querySelector('.modal');
const modalRegister = document.querySelector('.modal__register');
const modalLogIn = document.querySelector('.modal__log-in');
const modalForward = document.querySelectorAll('.modal_body_heading-foreign');
const dk = document.querySelector('.dk');
const dn = document.querySelector('.dn');
const closes = document.querySelector('.modal_overlay');

var istrue = true;
// Đăng kí
dk.onclick = function() {
    modal.classList.add('open');
    modalRegister.classList.add('open');
    istrue = true;
}

    modalForward[0].onclick = function() {
        modalRegister.classList.remove('open');
        modalLogIn.classList.add('open');
        istrue = false;
    }
    modalForward[1].onclick = function() {
        modalLogIn.classList.remove('open');
        modalRegister.classList.add('open');
        istrue = true;
    }
// Đăng kí

closes.onclick = function() {
    modal.classList.remove('open');
    if (istrue) {
        modalRegister.classList.remove('open');
    }
    else {
        modalLogIn.classList.remove('open');
    }
    
}

// Đăng nhập
dn.onclick = function() {
    modal.classList.add('open');
    modalLogIn.classList.add('open');
    istrue = false;
}

    modalForward[1].onclick = function() {
        modalLogIn.classList.remove('open');
        modalRegister.classList.add('open');
        istrue = true;
    }
    modalForward[0].onclick = function() {
        modalRegister.classList.remove('open');
        modalLogIn.classList.add('open');
        istrue = false;
    }
// Đăng nhập