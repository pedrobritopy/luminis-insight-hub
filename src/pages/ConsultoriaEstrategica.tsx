import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TrendingUp, ArrowLeft, CheckCircle2, Target, Users, Lightbulb, BookOpen } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function ConsultoriaEstrategica() {
  const benefits = [
    "Estratégia de dados personalizada para seu negócio",
    "Roadmap de transformação digital",
    "Identificação de quick wins e projetos prioritários",
    "Capacitação e treinamento de equipes",
    "Change management e gestão da mudança",
    "Governança e cultura data-driven",
  ];

  const services = [
    {
      icon: Target,
      title: "Data Strategy",
      description: "Desenvolvemos uma estratégia de dados alinhada aos objetivos do seu negócio."
    },
    {
      icon: Lightbulb,
      title: "Transformação Digital",
      description: "Guiamos sua jornada de transformação digital com foco em resultados mensuráveis."
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Facilitamos a adoção de novas tecnologias e processos na sua organização."
    },
    {
      icon: BookOpen,
      title: "Training & Enablement",
      description: "Capacitamos suas equipes para serem autossuficientes em BI e análise de dados."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">Voltar</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Consultoria Estratégica
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Orientação especializada para sua jornada de transformação digital. 
                Estratégias baseadas em dados que geram resultados concretos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              O que nossa{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Consultoria</span>
              {" "}oferece
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos construir sua estratégia de dados
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma sessão de discovery gratuita e comece sua transformação digital hoje.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Agendar Discovery
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
