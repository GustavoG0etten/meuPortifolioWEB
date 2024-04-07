
const myIcon = document.getElementById('.botao-linguagem');

myIcon.addEventListener('mouseover', function() {
    myIcon.textContent = 'HTML5';
    myIcon.classList.add('javascript');
});

myIcon.addEventListener('mouseout', function() {
    myIcon.textContent = <i class="fa-brands fa-html5"></i>;
    myIcon.classList.remove('javascript');
});
