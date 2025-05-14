// Função para aplicar o tema
function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') {
        html.classList.add('dark');
        document.getElementById('theme-icon').className = 'fas fa-sun';
    } else {
        html.classList.remove('dark');
        document.getElementById('theme-icon').className = 'fas fa-moon';
    }
}

// Detecta o tema preferido
function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Inicializa o tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const theme = getPreferredTheme();
    applyTheme(theme);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', next);
        applyTheme(next);
    });

    // Scroll suave
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    // Destaque de menu ativo
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function highlightMenu() {
        let scrollPos = window.scrollY + 120;
        let currentId = '';
        sections.forEach(section => {
            if (scrollPos >= section.offsetTop) {
                currentId = section.id;
            }
        });
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('menu-ativo');
            } else {
                link.classList.remove('menu-ativo');
            }
        });
    }
    window.addEventListener('scroll', highlightMenu);
    highlightMenu();

    // Carrossel simples "Nosso Trabalho"
    const carousel = document.getElementById('carousel-trabalho');
    if (!carousel) return;
    const imagensWrapper = carousel.querySelector('.carousel-imagens') || carousel.querySelector('div');
    if (!imagensWrapper) return;
    const imagens = Array.from(imagensWrapper.querySelectorAll('img'));
    if (imagens.length === 0) return;
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    let atual = 0;

    // Cria indicadores
    indicatorsContainer.innerHTML = '';
    imagens.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'w-3 h-3 rounded-full bg-gray-300 transition-all';
        if (idx === 0) dot.classList.add('bg-blue-600', 'dark:bg-[#4fc3f7]');
        dot.addEventListener('click', () => irPara(idx));
        indicatorsContainer.appendChild(dot);
    });

    function atualizar() {
        imagens.forEach((img, idx) => {
            img.classList.toggle('ativo', idx === atual);
        });
        Array.from(indicatorsContainer.children).forEach((dot, idx) => {
            dot.className = 'w-3 h-3 rounded-full bg-gray-300 transition-all';
            if (idx === atual) dot.classList.add('bg-blue-600', 'dark:bg-[#4fc3f7]');
        });
    }
    function irPara(idx) {
        atual = idx;
        atualizar();
    }
    if (prevBtn) {
        prevBtn.onclick = () => {
            atual = (atual - 1 + imagens.length) % imagens.length;
            atualizar();
        };
    }
    if (nextBtn) {
        nextBtn.onclick = () => {
            atual = (atual + 1) % imagens.length;
            atualizar();
        };
    }
    // Swipe para mobile
    let startX = 0;
    imagensWrapper.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });
    imagensWrapper.addEventListener('touchend', e => {
        const endX = e.changedTouches[0].clientX;
        if (endX < startX - 40) nextBtn && nextBtn.click();
        if (endX > startX + 40) prevBtn && prevBtn.click();
    });
    atualizar();
});

// Scroll suave para navegação interna
function scrollToSection(event) {
    if (this.hash) {
        event.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Compensa header fixo
                behavior: 'smooth'
            });
        }
    }
}

// Animação suave ao rolar (fade-in-up)
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.classList.add('animated');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Efeito de transparência no menu fixo ao rolar
function toggleNavbarScrolled() {
    const header = document.querySelector('header.navbar-fixed');
    if (!header) return;
    if (window.scrollY > 30) {
        header.classList.add('navbar-scrolled');
    } else {
        header.classList.remove('navbar-scrolled');
    }
}
window.addEventListener('scroll', toggleNavbarScrolled);
document.addEventListener('DOMContentLoaded', toggleNavbarScrolled);

// Feedback visual ao enviar formulário de contato
const contatoForm = document.querySelector('.formulario-contato form');
if (contatoForm) {
    contatoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simula envio (pode ser adaptado para AJAX real)
        const btn = contatoForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Enviando...';
        setTimeout(() => {
            btn.disabled = false;
            btn.textContent = 'Enviar Mensagem';
            // Remove mensagem anterior
            const oldMsg = contatoForm.querySelector('.form-feedback');
            if (oldMsg) oldMsg.remove();
            // Mostra mensagem de sucesso
            const msg = document.createElement('div');
            msg.className = 'form-feedback mt-2 text-green-600 dark:text-green-400 text-center font-semibold';
            msg.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
            contatoForm.appendChild(msg);
        }, 1200);
    });
}
