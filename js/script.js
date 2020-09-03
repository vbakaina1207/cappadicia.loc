let message = document.querySelector('.subscription-message');
let form = document.querySelector('.subscription');
let Name = document.querySelector('.subscription-name');

form.onsubmit = function(evt) {
    evt.preventDefault();
    message.textContent = "заявка принята "+Name.value;
};