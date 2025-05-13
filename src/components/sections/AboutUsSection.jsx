
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const StatCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
  >
    <Card className="h-full hover:shadow-xl transition-shadow duration-300 bg-card/50 dark:bg-card/70 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center space-x-3 pb-2">
        {icon}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

export function AboutUsSection() {
  return (
    <section id="sobre-nos" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre a VMLimp</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Apaixonados por limpeza e dedicados à sua satisfação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <img  
              className="rounded-lg shadow-xl object-cover w-full h-[300px] md:h-[400px]" 
              alt="Equipe VMLimp trabalhando em um carro"
             src="https://images.unsplash.com/photo-1573492466940-3156e63dc25b" />
             <p className="text-foreground/90 leading-relaxed">
              Na VMLimp, acreditamos que a limpeza vai além da estética. É sobre cuidado, bem-estar e a valorização do seu patrimônio. Com anos de experiência e uma paixão por detalhes, nossa equipe se dedica a oferecer serviços de limpeza automotiva e higienização de estofados que superam as expectativas.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Utilizamos produtos de alta qualidade e técnicas avançadas para garantir resultados impecáveis, sempre com foco na sua total satisfação e no respeito ao meio ambiente.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            <StatCard 
              icon={<Target className="h-8 w-8 text-primary" />} 
              title="Nossa Missão"
              description="Proporcionar serviços de limpeza e higienização de excelência, revitalizando veículos e ambientes com atenção meticulosa aos detalhes e compromisso com a satisfação do cliente."
              delay={0.2}
            />
            <StatCard 
              icon={<CheckCircle className="h-8 w-8 text-green-500" />} 
              title="Nossos Valores"
              description="Qualidade, Profissionalismo, Confiança, Detalhismo e Responsabilidade Socioambiental."
              delay={0.4}
            />
            <StatCard 
              icon={<Users className="h-8 w-8 text-blue-500" />} 
              title="Nosso Compromisso"
              description="Garantir que cada cliente receba um atendimento personalizado e um resultado que encante, construindo relações de confiança e duradouras."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
