// --- MENU MOBILE ---
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active'); // Para animação opcional do hamburger
    });

    // Fecha o menu ao clicar em um link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
}


// --- CARROSSEL DE PORTFÓLIO (Lógica Simples) ---
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

if (carouselInner && carouselItems.length > 0 && prevBtn && nextBtn) {
    let counter = 0;
    let size = carouselItems[0].clientWidth;

    // Função para atualizar a posição do carrossel
    const updateCarousel = () => {
        carouselInner.style.transform = `translateX(${-size * counter}px)`;
        // Opcional: Atualizar acessibilidade
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[counter].classList.add('active');
    };

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselItems.length - 1) return;
        carouselInner.style.transition = "transform 0.5s ease-in-out";
        counter++;
        updateCarousel();
    });

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselInner.style.transition = "transform 0.5s ease-in-out";
        counter--;
        updateCarousel();
    });
    
    // Atualiza o tamanho ao redimensionar a janela (para responsividade)
    window.addEventListener('resize', () => {
        size = carouselItems[0].clientWidth;
        updateCarousel();
    });

    // Auto-play (Opcional)
    setInterval(() => {
        if (counter >= carouselItems.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    }, 5000); // 5 segundos
    
}