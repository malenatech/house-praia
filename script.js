document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Inicializar Swiper
    const swiper = new Swiper(".mySwiper", {
        loop: true,              // looping infinito
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: "fade", // transição suave
        fadeEffect: { crossFade: true },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true,        // ativa arrastar no mouse
    });

    // Animações de scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // Scroll suave para links internos
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Verificar ao carregar e ao rolar
    checkFade();
    window.addEventListener('scroll', checkFade);

    // Menu hamburguer
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
});
