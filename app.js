document.getElementById('contact-form').addEventListener('submit', function(e) {
    const button = this.querySelector('button');
    button.innerText = 'იგზავნება...';
    button.disabled = true;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.reveal');
hiddenElements.forEach((el) => observer.observe(el));

const burger = document.getElementById('burger-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
    
    burger.classList.toggle('toggle');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});