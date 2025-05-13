
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Car, Sparkles, Facebook, Instagram } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const NavLink = ({ href, children, onClick }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md"
    whileHover={{ y: -2 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    {children}
  </motion.a>
);

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#sobre-nos', label: 'Sobre Nós' },
    { href: '#nosso-trabalho', label: 'Nosso Trabalho' },
    { href: '#fale-conosco', label: 'Fale Conosco' },
  ];

  const handleLinkClick = (e) => {
    // Smooth scroll for internal links
    if (e.target.hash) {
      e.preventDefault();
      document.querySelector(e.target.hash).scrollIntoView({
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Sparkles className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl tracking-tight">VMLimp</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={handleLinkClick}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href} onClick={handleLinkClick}>
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="pt-4 border-t border-border/40">
                    <p className="text-sm font-medium mb-2 px-3">Siga-nos:</p>
                    <div className="flex space-x-3 px-3">
                      <Button variant="ghost" size="icon" asChild>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                          <Instagram className="h-5 w-5 text-pink-500" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                          <Facebook className="h-5 w-5 text-blue-600" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
