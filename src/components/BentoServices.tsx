import { BarChart3, Zap, Link2, TrendingUp, Database, LineChart } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards interativos e relatórios estratégicos que transformam dados em decisões.",
    features: ["Power BI", "Tableau", "Looker"],
    size: "large",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Automação",
    description: "RPA e workflows inteligentes para eliminar tarefas manuais.",
    features: ["Python", "UiPath", "Power Automate"],
    size: "medium",
    color: "secondary",
  },
  {
    icon: Link2,
    title: "Integração",
    description: "APIs e pipelines de dados em tempo real.",
    features: ["REST", "GraphQL", "ETL"],
    size: "medium",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Análise Avançada",
    description: "Machine Learning e análise preditiva para insights estratégicos.",
    features: ["ML", "AI", "Forecasting"],
    size: "small",
    color: "primary",
  },
  {
    icon: Database,
    title: "Governança",
    description: "Qualidade, segurança e compliance de dados.",
    features: ["LGPD", "MDM", "Quality"],
    size: "small",
    color: "secondary",
  },
  {
    icon: LineChart,
    title: "Consultoria",
    description: "Estratégia data-driven e transformação digital.",
    features: ["Strategy", "Training", "Change"],
    size: "small",
    color: "accent",
  },
];

export function BentoServices() {
  return (
    <section id="services" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Soluções{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              completas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Da estratégia à execução, cobrimos toda a jornada de dados
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {/* Large Card - BI */}
          <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 hover:scale-[1.02] transition-all group animate-fade-in">
            <div className="h-full flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">{services[0].title}</h3>
              <p className="text-lg text-muted-foreground mb-6 flex-grow">
                {services[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {services[0].features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Medium Cards */}
          <div className="md:col-span-1 md:row-span-1 glass-card rounded-3xl p-6 hover:scale-[1.02] transition-all group animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{services[1].title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {services[1].description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {services[1].features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-muted rounded-md text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-3xl p-6 hover:scale-[1.02] transition-all group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Link2 className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">{services[2].title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              {services[2].description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {services[2].features.map((feature) => (
                <span
                  key={feature}
                  className="px-3 py-1 bg-muted rounded-md text-xs font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Small Cards */}
          {services.slice(3).map((service, idx) => {
            const gradientClass = idx === 0 ? "bg-gradient-primary" : idx === 1 ? "bg-gradient-secondary" : "bg-gradient-primary";
            return (
              <div
                key={service.title}
                className="glass-card rounded-3xl p-6 hover:scale-[1.02] transition-all group animate-fade-in"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${gradientClass} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 bg-muted rounded text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
