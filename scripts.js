document.addEventListener("DOMContentLoaded", () => {
    // === Lógica para el splash screen y audio ===
    const logo = document.getElementById("logo-container");
    if (logo) {
        logo.addEventListener("animationend", (e) => {
            if (e.animationName === "fadeOut") {
                logo.remove();
            }
        });
    }

    const aguaSonido = document.getElementById("aguaSonido");
    let yaSono = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !yaSono) {
                if (aguaSonido) {
                    aguaSonido.volume = 0.2;
                    aguaSonido.play().catch(() => {});
                    yaSono = true;
                }
            }
        });
    }, {
        threshold: 0.5
    });

    const header = document.querySelector(".header-site");
    if (header) {
        observer.observe(header);
    }

    // === Inicialización de AOS ===
    AOS.init({
        duration: 1000,
        once: true,
    });

    // === Reproducción de sonido de click ===
    const clickSound = document.getElementById("clickSound");
    if (clickSound) {
        document.querySelectorAll('a, button, .btn-whatsapp, .call-button').forEach(el => {
            el.addEventListener('click', () => {
                if (!el.classList.contains('whatsapp-button')) {
                    clickSound.currentTime = 0;
                    clickSound.play().catch(() => {});
                }
            });
        });
    }

    // === Inicialización de Swiper ===
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
