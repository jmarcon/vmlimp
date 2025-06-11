# VMLimp - Automotive and Residential Cleaning Services Website

A modern, responsive website for VM Limp, a family-owned cleaning company established in 2014, specializing in automotive and residential cleaning services in São José do Rio Preto, Brazil.

## Description

VMLimp is a static website showcasing professional cleaning services including:
- **Automotive Cleaning**: Detailed car and motorcycle washing and detailing
- **Residential Upholstery**: Deep cleaning and sanitization of sofas, mattresses, and furniture
- **On-site Services**: Professional cleaning at customer locations

The website features a modern design with:
- Responsive layout optimized for all devices
- Dark/light theme toggle
- Interactive image carousel showcasing work portfolio
- Contact forms with WhatsApp integration
- Instagram testimonials integration
- SEO optimization with structured data
- GDPR compliance with privacy policies

## Features

- 🌙 **Dark/Light Theme**: Automatic theme detection with manual toggle
- 📱 **Responsive Design**: Mobile-first approach using Tailwind CSS
- 🖼️ **Image Gallery**: Flickity-powered carousel showcasing completed work
- 💬 **WhatsApp Integration**: Direct contact through WhatsApp with pre-filled messages
- 📧 **Contact Forms**: Integrated contact forms with email functionality
- 🔍 **SEO Optimized**: Structured data markup for better search visibility
- 🎨 **Smooth Animations**: CSS animations with intersection observer
- 📊 **Analytics**: Google Analytics integration for tracking

## Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom styles with CSS variables for theming
- **JavaScript**: Vanilla JS for interactions and theme management
- **Tailwind CSS**: Utility-first CSS framework
- **Flickity**: Touch-enabled carousel library
- **Font Awesome**: Icon library
- **Google Fonts**: Montserrat and Open Sans typography

## Project Structure

```
vmlimp/
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── CNAME                  # Domain configuration
├── .gitignore            # Git ignore rules
├── behavior/
│   └── index.js          # JavaScript functionality
└── style/
    ├── index.css         # Main stylesheet
    ├── icons/            # Favicon and app icons
    │   ├── favicon.ico
    │   ├── apple-touch-icon.png
    │   └── ...
    └── images/
        ├── logo.png      # Company logo
        ├── moto.png      # Hero background image
        └── work/         # Portfolio images
            ├── 1.avif
            ├── 2.jpg
            └── ...
```

## How to Run Locally

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vmlimp
   ```

2. **Open in browser**:
   - Simply open [`index.html`](index.html) in your web browser
   - Or use a local development server (recommended)

### Using a Local Server (Recommended)

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js**
```bash
# Install a simple server globally
npm install -g http-server

# Run the server
http-server
```

**Option 3: Using PHP**
```bash
php -S localhost:8000
```

**Option 4: Using Live Server (VS Code)**
- Install the "Live Server" extension in VS Code
- Right-click on [`index.html`](index.html) and select "Open with Live Server"

3. **Access the website**:
   - Open your browser and navigate to `http://localhost:8000`

## Key Files

- [`index.html`](index.html) - Main website file with all content and structure
- [`style/index.css`](style/index.css) - Custom CSS with theme variables and responsive design
- [`behavior/index.js`](behavior/index.js) - JavaScript for interactivity, theme switching, and form handling

## Features Overview

### Theme System
The website includes a sophisticated dark/light theme system that:
- Automatically detects user's system preference
- Persists theme choice in localStorage
- Provides smooth transitions between themes
- Uses CSS custom properties for consistent theming

### Contact Integration
- WhatsApp integration with pre-filled messages
- Email contact with obfuscated email addresses
- Phone number integration with tel: links
- Contact form that redirects to WhatsApp

### Performance Optimizations
- Lazy loading for images
- Optimized image formats (AVIF, WebP fallbacks)
- Minified external dependencies
- Efficient CSS with minimal JavaScript

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is proprietary software owned by VM Limp. All rights reserved.

## Contact

- **Website**: [vmlimp.com.br](https://vmlimp.com.br)
- **WhatsApp**: +55 17 99604-8367
- **Email**: vmlimp.riopreto@gmail.com
- **Instagram**: [@vmriopreto](https://instagram.com/vmriopreto)
- **Facebook**: [@vmriopreto](https://facebook.com/vmriopreto)

---

*Developed with ❤️ for VM Limp - Professional Cleaning Services*
