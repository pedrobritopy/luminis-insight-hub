import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card border-2 border-border rounded-3xl p-12 shadow-card animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                seus dados?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos iluminar o caminho da sua 
              empresa com inteligência de dados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8"
              >
                <Mail className="mr-2 h-5 w-5" />
                Solicitar Proposta
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Junte-se a mais de 150 empresas que já transformaram seus dados em estratégia
              </p>
              <div className="flex items-center justify-center gap-8 flex-wrap">
                <div className="text-sm font-medium">Resposta em até 24h</div>
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <div className="text-sm font-medium">Diagnóstico gratuito</div>
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <div className="text-sm font-medium">Sem compromisso</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
