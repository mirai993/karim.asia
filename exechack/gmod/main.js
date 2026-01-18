const d = document;

/* massive buttons */
var navbar__toggle = d.querySelector('.navbar__toggle');
var navbar_ml = d.querySelector('.navbar_ml');
var logo___ml = d.querySelector('.logo___ml');
var secondlogo = d.querySelector('.logo_hide_pc');
var secondtext = d.querySelector('.hide_txt_pc');
var button_hide_pc = d.querySelector('.button_hide_pc');

navbar__toggle.addEventListener('click', function(){
    navbar_ml.classList.add('active');
    secondlogo.classList.add('activef');
    secondtext.classList.add('activef');
    button_hide_pc.classList.add('activef');
});

button_hide_pc.addEventListener('click', function(){
    navbar_ml.classList.remove('active');
});