import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link2, ArrowLeft, CheckCircle2, Boxes, Cloud, Network, Database } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function IntegracaoDados() {
  const benefits = [
    "Sincronização em tempo real entre sistemas",
    "Eliminação de silos de informação",
    "Dados consistentes em toda organização",
    "Redução de trabalho manual de integração",
    "APIs REST e SOAP personalizadas",
    "Pipelines ETL/ELT automatizados",
  ];

  const solutions = [
    {
      icon: Cloud,
      title: "Integração Cloud",
      description: "Conecte sistemas em nuvem com suas aplicações on-premise de forma segura e eficiente."
    },
    {
      icon: Network,
      title: "APIs Customizadas",
      description: "Desenvolvimento de APIs REST/SOAP para integração entre sistemas legados e modernos."
    },
    {
      icon: Database,
      title: "ETL/ELT Pipelines",
      description: "Processos automatizados de extração, transformação e carga de dados."
    },
    {
      icon: Boxes,
      title: "Middleware Integration",
      description: "Camada de integração que facilita a comunicação entre múltiplos sistemas."
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
          <div className="absolute inset-0 bg-gradient-secondary opacity-10" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 mx-auto">
                <Link2 className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Integração de Dados
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conecte todos os seus sistemas e elimine silos de informação. 
                Dados integrados em tempo real para decisões mais rápidas e precisas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Vantagens da{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">Integração</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-2 hover:border-secondary/50 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center mb-3">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{solution.title}</CardTitle>
                    <CardDescription className="text-base">
                      {solution.description}
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
              Integre seus sistemas hoje
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Solicite um diagnóstico gratuito e descubra como integrar seus dados de forma eficiente.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-secondary hover:opacity-90 shadow-glow">
                Diagnóstico Gratuito
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
