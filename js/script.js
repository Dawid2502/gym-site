const nav = document.querySelector('.navigation');
const burgerBtn = document.querySelector('.burger-btn');
const formName = document.querySelector('#name');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#contact-msg');
const formBtn = document.querySelector('.form-btn');

const toggleMenu = () => {
nav.classList.toggle('active-menu');
}

const checkInputs = () => {
    if(formName.value !== '' && formEmail.value !== '' && formMessage.value !== '' ){
        alert('Wiadomość wysłana');
    } else alert('Wypełnij wszystkie pola!!');

}

formBtn.addEventListener('click', e => {
    e.preventDefault();
    checkInputs();
})
burgerBtn.addEventListener('click', toggleMenu)