
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
         <img  class="w-full h-full object-cover" alt="Fundo abstrato de limpeza com brilhos" src="https://images.unsplash.com/photo-1702313254197-c4e56143f462" />
      </div>
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Sparkles className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">VMLimp: Detalhes que</span>
            <span className="block text-primary">Fazem a Diferença</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10">
            Especialistas em limpeza automotiva detalhada e higienização de estofados residenciais. Devolvemos o brilho e o frescor que você merece.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button size="lg" className="w-full sm:w-auto group" asChild>
              <a href="#fale-conosco">
                Solicite um Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto group" asChild>
              <a href="#nosso-trabalho">
                Veja Nossos Serviços
                <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse text-primary" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
