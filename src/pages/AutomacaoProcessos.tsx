import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Zap, ArrowLeft, CheckCircle2, Clock, TrendingDown, Workflow, Cpu } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function AutomacaoProcessos() {
  const benefits = [
    "Redução de até 80% no tempo de processos manuais",
    "Eliminação de erros humanos",
    "Equipe focada em atividades estratégicas",
    "ROI comprovado em menos de 6 meses",
    "Processos 24/7 sem interrupção",
    "Escalabilidade sob demanda",
  ];

  const useCases = [
    {
      icon: Clock,
      title: "Tarefas Repetitivas",
      description: "Automatize processos repetitivos como entrada de dados, geração de relatórios e envio de emails."
    },
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description: "Diminua custos operacionais eliminando tarefas manuais e retrabalho."
    },
    {
      icon: Workflow,
      title: "Workflows Inteligentes",
      description: "Crie fluxos automatizados que integram múltiplos sistemas e departamentos."
    },
    {
      icon: Cpu,
      title: "RPA Avançado",
      description: "Robôs que imitam ações humanas em sistemas legados e aplicações web."
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
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mx-auto">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Automação de Processos
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Libere sua equipe de tarefas repetitivas. Automatize processos críticos 
                e ganhe eficiência operacional com RPA e automação inteligente.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefícios da{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Automação</span>
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
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{useCase.title}</CardTitle>
                    <CardDescription className="text-base">
                      {useCase.description}
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
              Automatize agora e veja os resultados
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Agende uma análise gratuita dos seus processos e descubra onde você pode ganhar eficiência.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
                Analisar Meus Processos
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
