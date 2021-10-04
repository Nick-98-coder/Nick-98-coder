let toggle_bar = document.querySelector('.toggle_bar');
let l_nav = document.querySelector('.l_nav');

toggle_bar.addEventListener('click', function () {
    if (this.classList.toggle('active'))
        l_nav.style.width = '14rem';
    else
        l_nav.style.width = '5rem';
})
document.querySelector(".profile").addEventListener("click", function () {
    this.classList.toggle("active");
});
var dd = document.querySelector(".icons");

dd.addEventListener("click", function () {
    this.classList.toggle("active");
})