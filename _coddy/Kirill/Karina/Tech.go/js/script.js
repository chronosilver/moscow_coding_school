var link = document.querySelector('.login-link');
var popup = document.querySelector('.modal-login');
var modalClose = document.querySelector('.modal-close');
var form = popup.querySelector('.log-in-form');
var login = popup.querySelector('[name=log-in]');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');

var buttonWay = document.querySelector('.button-way');
var popupMap = document.querySelector('.modal-map');
var mapClose = popupMap.querySelector('.map-close');

link.addEventListener('click', function(evt) {
    evt.preventDefault ()
    console.log('Кнопка Вход нажата')
    popup.classList.add('modal-show');
    login.focus();
    if (storage) {
        login.value = storage;
        password.focus (); }
        else {
            login.focus ();
        }
});
console.log('test');

modalClose.addEventListener('click', function(evt) {
    evt.preventDefault ()
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    console.log('ru');
});

form.addEventListener('submit', function(evt) {
    evt.preventDefault ();
    console.log(login.value);
    console.log(password.value);

    if(!login.value || !password.value) {
        evt.preventDefault ();
        popup.classList.add('modal-error');
        console.log('Нужно ввести логин и пароль!');
    }
    else {
        localStorage.setItem('login', login.value);
    };
});

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault;

        if(popup.classList.contains ('modal-show')) {
            popup.classList.remove('modal-show');
        }
    }
})

buttonWay.addEventListener('click', function(evt) {
    evt.preventDefault ();
    console.log('ioy');
    popupMap.classList.add('modal-show');
});

mapClose.addEventListener('click', function(evt) {
    evt.preventDefault ()
    popupMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault;

        if(popupMap.classList.contains ('modal-show')) {
            popupMap.classList.remove('modal-show');
        }
    }
}) 