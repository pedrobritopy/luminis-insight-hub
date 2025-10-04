import { Target, Eye, Lightbulb, Award } from "lucide-react";

export function AboutVision() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transformamos{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  dados em clareza
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos especialistas em descomplicar o complexo. Nossa missão é 
                iluminar o caminho das empresas através de dados estratégicos 
                e decisões inteligentes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
                  <p className="text-muted-foreground">
                    Transformar dados em informação clara e estratégica, 
                    capacitando empresas para decisões mais rápidas e seguras.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nossa Visão</h3>
                  <p className="text-muted-foreground">
                    Ser referência nacional em BI aplicado, reconhecida por 
                    trazer clareza, integração e eficiência aos dados empresariais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Differentials Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card rounded-3xl p-6 hover:scale-105 transition-all">
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Inovação Constante</h3>
              <p className="text-sm text-muted-foreground">
                Sempre à frente com as melhores práticas e tecnologias de BI do mercado.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 hover:scale-105 transition-all mt-8 sm:mt-0">
              <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Resultados Reais</h3>
              <p className="text-sm text-muted-foreground">
                Foco total em métricas que importam e impacto mensurável no seu negócio.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 sm:col-span-2 hover:scale-105 transition-all bg-gradient-primary text-white">
              <h3 className="text-2xl font-bold mb-3">
                Informação Acionável, Não Apenas Relatórios
              </h3>
              <p className="text-white/90">
                Cada dashboard, cada análise, cada integração é projetada para 
                gerar valor imediato e insights que movem seu negócio para frente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
