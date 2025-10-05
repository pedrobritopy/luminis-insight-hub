import { BarChart3, Zap, Link2, TrendingUp, Database, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Desenvolvimento de dashboards interativos, relatórios estratégicos e KPIs personalizados que realmente impulsionam seu negócio.",
    features: ["Dashboards Interativos", "Relatórios Customizados", "KPIs Estratégicos", "Análise Preditiva"],
    link: "/bi",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Eliminamos processos morosos e repetitivos através de automação avançada, liberando sua equipe para atividades estratégicas.",
    features: ["RPA (Robotic Process Automation)", "Workflows Automatizados", "Redução de Custos", "Ganho de Eficiência"],
    link: "/rpa",
  },
  {
    icon: Link2,
    title: "Integração de Dados",
    description: "Conectamos sistemas internos e externos para envio e consumo de informações em tempo real, criando um ecossistema de dados integrado.",
    features: ["APIs REST/SOAP", "ETL/ELT Pipelines", "Data Warehousing", "Sincronização em Tempo Real"],
    link: "/integra",
  },
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description: "Orientamos sua empresa na jornada de transformação digital através de estratégias baseadas em dados.",
    features: ["Data Strategy", "Digital Transformation", "Change Management", "Training & Enablement"],
    link: "/consult",
  },
];

export function Services() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              fazemos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Soluções completas em Business Intelligence e Dados
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover:shadow-card transition-all border-2 hover:border-primary/50 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full mt-2">
                    Saiba Mais
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
