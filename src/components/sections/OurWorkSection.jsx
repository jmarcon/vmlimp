
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles, Car, Sofa } from 'lucide-react';

const workItems = [
  {
    title: "Limpeza Detalhada de Carro",
    description: "Interior e exterior impecáveis, revitalizando cada detalhe do seu veículo.",
    imageText: "Carro esportivo vermelho brilhando após lavagem detalhada",
    icon: <Car className="h-8 w-8 text-primary" />,
    alt: "Carro esportivo limpo"
  },
  {
    title: "Higienização Profunda de Sofá",
    description: "Removemos sujeira, ácaros e odores, deixando seu sofá como novo.",
    imageText: "Sofá claro sendo higienizado profissionalmente",
    icon: <Sofa className="h-8 w-8 text-primary" />,
    alt: "Higienização de sofá"
  },
  {
    title: "Polimento Técnico Automotivo",
    description: "Restauração do brilho da pintura, eliminando riscos e imperfeições.",
    imageText: "Close-up de capô de carro preto polido refletindo a luz",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    alt: "Polimento automotivo"
  },
  {
    title: "Limpeza de Motor Detalhada",
    description: "Cuidado especializado para o coração do seu veículo, seguro e eficaz.",
    imageText: "Motor de carro limpo e detalhado",
    icon: <Car className="h-8 w-8 text-primary" />,
    alt: "Limpeza de motor"
  },
];

const WorkCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader className="relative p-0">
        <img  
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
          alt={item.alt}
         src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          {React.cloneElement(item.icon, { className: "h-10 w-10 text-white drop-shadow-lg" })}
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="text-primary p-0 group-hover:underline">
          Saber Mais 
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);


export function OurWorkSection() {
  return (
    <section id="nosso-trabalho" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nosso Trabalho</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Resultados que falam por si. Veja a transformação que podemos fazer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workItems.map((item, index) => (
            <WorkCard key={index} item={item} index={index} />
          ))}
        </div>
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
        >
          <Button size="lg" asChild className="group">
            <a href="#fale-conosco">
              Transforme seu bem também
              <Sparkles className="ml-2 h-5 w-5 group-hover:animate-ping" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
