import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function ModernHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/30 rounded-2xl rotate-12 animate-float" />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-secondary/30 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full mb-8 animate-scale-in">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Business Intelligence de Nova Geração</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none animate-fade-in-up">
          <span className="block">Clareza em</span>
          <span className="block bg-gradient-primary bg-clip-text text-transparent text-glow">
            cada dado
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Transformamos complexidade em clareza. Dados em estratégia. 
          Processos em resultados. Bem-vindo ao futuro da inteligência empresarial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-10 py-6 h-auto rounded-xl group"
          >
            Iniciar Projeto
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-10 py-6 h-auto rounded-xl border-2 glass-card"
          >
            Ver Cases
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
          {[
            { value: "250+", label: "Projetos" },
            { value: "150+", label: "Clientes" },
            { value: "98%", label: "Satisfação" },
            { value: "40%", label: "Eficiência +" },
          ].map((stat, i) => (
            <div 
              key={stat.label} 
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform animate-fade-in"
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
