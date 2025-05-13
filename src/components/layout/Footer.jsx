
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-secondary text-secondary-foreground"
    >
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-10 w-10 text-primary" />
              <span className="font-bold text-2xl">VMLimp</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Limpeza detalhada para seu veículo e lar. Qualidade e satisfação garantidas.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-foreground/80 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground/80 hover:text-primary">
                  <Instagram className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Serviços</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li><a href="#nosso-trabalho" className="text-sm text-secondary-foreground/80 hover:text-primary">Limpeza Automotiva</a></li>
                  <li><a href="#nosso-trabalho" className="text-sm text-secondary-foreground/80 hover:text-primary">Higienização de Estofados</a></li>
                  <li><a href="#nosso-trabalho" className="text-sm text-secondary-foreground/80 hover:text-primary">Polimento Detalhado</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold tracking-wider uppercase">Empresa</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li><a href="#sobre-nos" className="text-sm text-secondary-foreground/80 hover:text-primary">Sobre Nós</a></li>
                  <li><a href="#fale-conosco" className="text-sm text-secondary-foreground/80 hover:text-primary">Contato</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8"> {/* Adjusted for single column for legal */}
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Política de Privacidade</a></li>
                  <li><a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary">Termos de Serviço</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-sm text-center text-secondary-foreground/80">&copy; {currentYear} VMLimp. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  );
}
