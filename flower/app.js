const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const fasfauser = document.querySelector('.fas fa-user');

registerLink.addEventListener('click', ()=>{
     wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

fasfa-user.addEventListener('click', ()=> {
    wrapper.classList.add('active-user');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
