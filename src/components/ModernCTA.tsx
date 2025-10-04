import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export function ModernCTA() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-[3rem] p-12 md:p-16 text-center animate-scale-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Pronto para começar?</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Vamos transformar
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              seus dados juntos
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma conversa sem compromisso e descubra como podemos 
            iluminar o caminho da sua empresa com inteligência de dados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-10 py-6 h-auto rounded-xl group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Proposta
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 h-auto rounded-xl border-2 glass-card"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Falar com Especialista
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle2, text: "Resposta em 24h" },
              { icon: CheckCircle2, text: "Diagnóstico gratuito" },
              { icon: CheckCircle2, text: "Sem compromisso" },
            ].map((item, idx) => (
              <div
                key={item.text}
                className="flex items-center gap-3 justify-center glass-card rounded-2xl p-4 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
