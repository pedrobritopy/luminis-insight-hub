import { Target, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Quem{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                somos
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A LuminisData é uma consultoria especializada em Business Intelligence, 
                    automação de processos e integração de dados. Nossa missão é transformar 
                    dados em informação clara e estratégica, iluminando o caminho das empresas 
                    para decisões mais rápidas, inteligentes e seguras.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-card transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser referência nacional em inteligência de mercado e BI aplicado, 
                    reconhecida por trazer clareza, integração e eficiência aos dados 
                    das empresas brasileiras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
