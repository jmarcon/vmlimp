
document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = "5517999999999"; 
  const WHATSAPP_MESSAGE = "Olá! Gostaria de um orçamento para os serviços da VMLimp.";
  
  const whatsappLinkElement = document.getElementById('whatsapp-link');
  if (whatsappLinkElement) {
    whatsappLinkElement.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  }

  // Theme Toggle
  const themeSwitch = document.getElementById('theme-switch');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const rootHtml = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'dark') {
      rootHtml.classList.add('dark');
      themeSwitch.setAttribute('aria-checked', 'true');
      moonIcon.classList.remove('text-muted-foreground');
      moonIcon.classList.add('text-blue-500');
      sunIcon.classList.add('text-muted-foreground');
      sunIcon.classList.remove('text-yellow-500');
    } else {
      rootHtml.classList.remove('dark');
      themeSwitch.setAttribute('aria-checked', 'false');
      moonIcon.classList.add('text-muted-foreground');
      moonIcon.classList.remove('text-blue-500');
      sunIcon.classList.remove('text-muted-foreground');
      sunIcon.classList.add('text-yellow-500');
    }
  }

  function toggleTheme() {
    const currentTheme = rootHtml.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('vmlimp-theme', newTheme);
    applyTheme(newTheme);
  }

  if (themeSwitch) {
    const initialTheme = localStorage.getItem('vmlimp-theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(initialTheme);
    
    themeSwitch.addEventListener('click', toggleTheme);
  }

  // Mobile Menu
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (mobileMenuButton && mobileMenu && menuIconOpen && menuIconClose) {
    mobileMenuButton.addEventListener('click', () => {
      const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
      mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconOpen.classList.toggle('block');
      menuIconClose.classList.toggle('hidden');
      menuIconClose.classList.toggle('block');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconOpen.classList.add('block');
        menuIconClose.classList.add('hidden');
        menuIconClose.classList.remove('block');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Only prevent default for actual internal fragment links
      if (href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-button');

  if (contactForm && formStatus && submitButton) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitText = submitButton.querySelector('.submit-text');
      
      submitButton.disabled = true;
      if(submitText) submitText.textContent = 'Enviando...';

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      console.log("Form data submitted:", data);

      // Display success toast
      showToast("Mensagem Enviada!", "Obrigado por entrar em contato. Responderemos em breve.", "success");
      
      contactForm.reset();
      submitButton.disabled = false;
      if(submitText) submitText.textContent = 'Enviar Mensagem';
    });
  }
  
  // Toast Notification System
  const toastContainer = document.getElementById('toast-container');

  function showToast(title, description, type = 'default') {
    if (!toastContainer) return;

    const toastId = `toast-${Date.now()}`;
    const toastElement = document.createElement('div');
    toastElement.id = toastId;
    toastElement.className = `toast ${type}`;
    
    const titleElement = document.createElement('div');
    titleElement.className = 'toast-title';
    titleElement.textContent = title;
    
    const descriptionElement = document.createElement('div');
    descriptionElement.className = 'toast-description';
    descriptionElement.textContent = description;
    
    toastElement.appendChild(titleElement);
    toastElement.appendChild(descriptionElement);
    
    toastContainer.appendChild(toastElement);
    
    // Trigger reflow to enable transition
    const _unused = toastElement.offsetHeight; // Corrected line
    
    toastElement.classList.add('show');
    
    setTimeout(() => {
      toastElement.classList.remove('show');
      setTimeout(() => {
        toastElement.remove();
      }, 300); // Match CSS transition duration
    }, 5000); // Toast visible duration
  }


  // Set current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Remove preload class after everything is set up
  document.documentElement.classList.remove('hidden-preload');
});
