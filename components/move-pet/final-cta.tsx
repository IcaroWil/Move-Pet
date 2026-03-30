import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
      <div className="absolute inset-0 bg-[url('/images/hero-dog.jpg')] bg-cover bg-center opacity-10" />

      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/10 rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-primary-foreground/10 rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-14 md:px-10 lg:px-14 shadow-2xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/10 mb-8">
              <Heart className="w-10 h-10 text-primary-foreground" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
              Mais liberdade, conforto e dignidade para quem faz parte da família
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Seu pet merece viver com qualidade. Dê o primeiro passo para transformar
              a vida do seu companheiro e descubra como podemos ajudar com soluções
              personalizadas e acessíveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-10 py-7 text-lg shadow-2xl transition-all hover:-translate-y-1"
              >
                Solicitar Avaliação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold px-10 py-7 text-lg transition-all"
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">+120</p>
                <p className="text-sm text-primary-foreground/70">Pets transformados</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">95%</p>
                <p className="text-sm text-primary-foreground/70">Satisfação</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">24h</p>
                <p className="text-sm text-primary-foreground/70">Retorno garantido</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">6 meses</p>
                <p className="text-sm text-primary-foreground/70">Garantia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}