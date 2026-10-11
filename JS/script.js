const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', function () {
  nav.classList.toggle('is-open');
  burger.classList.toggle('is-open');
});