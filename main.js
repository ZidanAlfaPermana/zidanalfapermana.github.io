const navbar = document.getElementById('navbar');
let carouselIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
let menuOpen = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('bg-dark1/95', 'backdrop-blur-sm', 'shadow-lg');
    } else {
        navbar.classList.remove('bg-dark1/95', 'backdrop-blur-sm', 'shadow-lg');
    }
});

hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('hidden', !menuOpen);
    if (menuOpen) {
        bar1.style.transform = 'translateY(8px) rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
        bar1.style.transform = '';
        bar2.style.opacity = '';
        bar3.style.transform = '';
    }
});

function closeMobile() {
    menuOpen = false;
    mobileMenu.classList.add('hidden');
    bar1.style.transform = '';
    bar2.style.opacity = '';
    bar3.style.transform = '';
}

function carouselUpdateUI() {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === carouselIndex ? '1' : '0';
        slide.style.zIndex  = i === carouselIndex ? '1' : '0';
    });
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        if (i === carouselIndex) {
            dot.style.width = '20px';
            dot.style.backgroundColor = '#c8a96e';
        } else {
            dot.style.width = '6px';
            dot.style.backgroundColor = 'rgba(255,255,255,0.3)';
        }
    });
}

function carouselNext() {
    carouselIndex = (carouselIndex + 1) % totalSlides;
    carouselUpdateUI();
}

function carouselPrev() {
    carouselIndex = (carouselIndex - 1 + totalSlides) % totalSlides;
    carouselUpdateUI();
}

function carouselGo(i) {
    carouselIndex = i;
    carouselUpdateUI();
}

setInterval(carouselNext, 3500);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('section > div').forEach(el => {
    if (!el.closest('#home')) {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-8');
        observer.observe(el);
    }
});