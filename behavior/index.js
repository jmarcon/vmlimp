// Monta o link do WhatsApp
var waNumber = "(17) 99604-8367";
var wa = "5517996048367";
var waMsg = "Ol%C3%A1%2C%20vi%20seu%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20limpeza";
var waLink = "https://wa.me/" + wa + "?text=" + waMsg;
var waElem = document.getElementById("whatsapp-link");
if (waElem) {
    waElem.setAttribute("href", waLink);
    waElem.setAttribute("rel", "nofollow noopener noreferrer");
    waElem.setAttribute("target", "_blank");
}

// Monta o link de telefone
var telNumber = "(17) 99604-8367";
var tel = "17996048367";
var telLink = "tel:" + tel;
var telElem = document.getElementById("phone-link");
if (telElem) {
    telElem.setAttribute("href", telLink);
    telElem.setAttribute("rel", "nofollow");
}

// Monta o link de email
var emailUser = "vmlimp.riopreto";
var emailDomain = "gmail.com";
var email = emailUser + "@" + emailDomain;
var emailLink = "mailto:" + email;
var emailElem = document.getElementById("email-link");
var emailTextElem = document.getElementById("email-text");
if (emailElem && emailTextElem) {
    emailElem.setAttribute("href", emailLink);
    emailElem.setAttribute("rel", "nofollow");
    emailTextElem.textContent = email;
}

// Formulário para WhatsApp
var form = document.getElementById("contato-form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var nome = document.getElementById("nome").value.trim();
        var email = document.getElementById("email").value.trim();
        var mensagem = document.getElementById("mensagem").value.trim();

        var texto = `Olá, gostaria de entrar em contato!%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Mensagem:* ${mensagem}`;
        var wa = "5517996048367";
        var waLink = `https://wa.me/${wa}?text=${texto}`;

        window.open(waLink, "_blank");
    });
}

// Atualiza o ano no rodapé
var anoAtual = new Date().getFullYear();
var anoElem = document.getElementById("ano-atual");
if (anoElem) {
    anoElem.textContent = anoAtual;
}


// Função para aplicar o tema
function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') {
        html.classList.add('dark');
        document.getElementById('theme-icon').className = 'fa-regular fa-sun';
    } else {
        html.classList.remove('dark');
        document.getElementById('theme-icon').className = 'fa-regular fa-moon';
    }
}

// Detecta o tema preferido
function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Inicializa o tema ao carregar a página
const theme = getPreferredTheme();
applyTheme(theme);


function themeToggle() {
    const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
}

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


// Aplica o tema antes de carregar o CSS para evitar flash incorreto
(function () {
    try {
        var theme = localStorage.getItem('theme');
        if (!theme) {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    } catch (e) { }
})();