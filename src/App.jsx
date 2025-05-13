
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutUsSection } from '@/components/sections/AboutUsSection';
import { OurWorkSection } from '@/components/sections/OurWorkSection';
import { ContactUsSection } from '@/components/sections/ContactUsSection';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Separator } from '@/components/ui/separator';
import { motion, AnimatePresence } from 'framer-motion';


function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vmlimp-theme">
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <AnimatePresence>
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroSection />
            </motion.div>
            
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutUsSection />
            </motion.div>

            <Separator className="my-0" />
            
            <motion.div
              key="work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <OurWorkSection />
            </motion.div>

            <Separator className="my-0" />

            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ContactUsSection />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
