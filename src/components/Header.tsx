import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              LuminisData
            </h1>
            <p className="text-xs text-muted-foreground">Clareza em cada informação</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              Área do Cliente
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
