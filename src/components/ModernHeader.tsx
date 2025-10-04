import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";

export function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                LuminisData
              </h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#stats" className="hover:text-primary transition-colors">Resultados</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow hidden sm:flex"
            >
              <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                Área do Cliente
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
              <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
              <a href="#stats" className="hover:text-primary transition-colors">Resultados</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary hover:opacity-90 w-full"
              >
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  Área do Cliente
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
