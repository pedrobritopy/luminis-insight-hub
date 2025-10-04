import { TrendingUp, Users, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "250+",
    label: "Projetos Entregues",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "150+",
    label: "Clientes Ativos",
    color: "text-secondary",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    color: "text-accent",
  },
  {
    icon: Zap,
    value: "40%",
    label: "Redução de Tempo Médio",
    color: "text-primary",
  },
];

export function Stats() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              falam
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Números que comprovam nosso compromisso com excelência
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border-2 border-border rounded-2xl p-8 hover:shadow-card hover:border-primary/50 transition-all">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
