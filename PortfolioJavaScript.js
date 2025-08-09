const hero = document.getElementById('hero-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        hero.classList.add('shrunk');
    } else {
        hero.classList.remove('shrunk');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const offset = 100; 
        const target = document.querySelector(this.getAttribute('href'));
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    });
});