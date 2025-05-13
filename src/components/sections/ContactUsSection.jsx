
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

export function ContactUsSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data submitted:", formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
      variant: "default",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };
  
  const WHATSAPP_NUMBER = "5517999999999"; // Substitua pelo número de WhatsApp da VMLimp
  const WHATSAPP_MESSAGE = "Olá! Gostaria de um orçamento para os serviços da VMLimp.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


  return (
    <section id="fale-conosco" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/30 to-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fale Conosco</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Pronto para dar um novo brilho ao seu carro ou estofado? Entre em contato!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-semibold">Informações de Contato</h3>
            <div className="space-y-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                <MessageSquare className="h-8 w-8 text-green-500 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">Clique para conversar!</p>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">contato@vmlimp.com.br</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-muted-foreground">São José do Rio Preto, SP (Atendimento Domiciliar)</p>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-border/40">
              <h4 className="text-lg font-semibold mb-3">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild className="hover:bg-pink-500/10 hover:border-pink-500">
                  <a href="https://instagram.com/vmlimpriopreto" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5 text-pink-500" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-blue-600/10 hover:border-blue-600">
                  <a href="https://facebook.com/vmlimpriopreto" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Card className="shadow-xl bg-card/80 dark:bg-card/90 backdrop-blur-md">
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
                <CardDescription>Preencha o formulário abaixo e retornaremos o mais breve possível.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome" required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="seu@email.com" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone (Opcional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(XX) XXXXX-XXXX" value={formData.phone} onChange={handleChange} disabled={isSubmitting} />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" name="message" placeholder="Como podemos ajudar?" required rows={5} value={formData.message} onChange={handleChange} disabled={isSubmitting} />
                  </div>
                  <Button type="submit" size="lg" className="w-full group" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : (
                      <>
                        Enviar Mensagem <Sparkles className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
