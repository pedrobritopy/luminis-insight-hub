import { CheckCircle2, Lightbulb, Users, Award } from "lucide-react";

const differentials = [
  {
    icon: CheckCircle2,
    title: "Informação Acionável",
    description: "Entregamos informação prática e acionável, não apenas relatórios bonitos. Cada dashboard é projetado para gerar valor imediato.",
  },
  {
    icon: Lightbulb,
    title: "Negócio + Tecnologia",
    description: "Conectamos negócio e tecnologia em uma única solução. Falamos a linguagem do seu mercado e transformamos em tecnologia.",
  },
  {
    icon: Users,
    title: "Projetos Sob Medida",
    description: "Cada projeto é único. Trabalhamos lado a lado com você para criar soluções que resolvem seus desafios específicos.",
  },
  {
    icon: Award,
    title: "Foco em Resultado",
    description: "Nosso sucesso é medido pelo seu resultado. Acompanhamos métricas reais de impacto e ROI em cada projeto.",
  },
];

export function Differentials() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              diferencial
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            O que nos torna únicos no mercado de Business Intelligence
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-card transition-all animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
