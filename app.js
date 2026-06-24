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