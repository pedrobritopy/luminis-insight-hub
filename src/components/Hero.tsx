import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap, Link2 } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6 animate-scale-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Transforme dados em decisões inteligentes</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Clareza em cada{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              informação
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Consultoria especializada em Business Intelligence, automação de processos e 
            integração de dados. Transformamos seus dados em estratégia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow text-lg px-8">
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2">
              Saber Mais
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow animate-fade-in">
              <BarChart3 className="h-10 w-10 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Projetos de BI</h3>
              <p className="text-sm text-muted-foreground">
                Dashboards, relatórios e KPIs personalizados
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Zap className="h-10 w-10 text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Automação</h3>
              <p className="text-sm text-muted-foreground">
                Otimização de processos morosos e repetitivos
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link2 className="h-10 w-10 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Integração</h3>
              <p className="text-sm text-muted-foreground">
                Conexão de sistemas e dados em tempo real
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
