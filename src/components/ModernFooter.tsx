import { Sparkles, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export function ModernFooter() {
  return (
    <footer className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    LuminisData
                  </h3>
                  <p className="text-sm text-muted-foreground">Clareza em cada informação</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Consultoria especializada em Business Intelligence, automação de processos 
                e integração de dados. Transformamos dados em estratégia.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-12 h-12 rounded-xl glass-card hover:bg-primary hover:text-white transition-all flex items-center justify-center group"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Soluções</h4>
              <ul className="space-y-3 text-sm">
                {["Business Intelligence", "Automação", "Integração", "Consultoria"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="mailto:contato@luminisdata.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contato@luminisdata.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <a href="tel:+5511999999999" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 11 99999-9999
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    São Paulo, SP - Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2025 LuminisData. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors">Termos</a>
                <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
