import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Leaf, Heart } from "lucide-react"

const highlights = [
  {
    icon: Sparkles,
    title: "Personalização sob medida",
    description: "Cada peça é única",
  },
  {
    icon: Leaf,
    title: "Impressão 3D sustentável",
    description: "Materiais eco-friendly",
  },
  {
    icon: Heart,
    title: "Mais mobilidade e conforto",
    description: "Qualidade de vida",
  },
]

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">
                Tecnologia e cuidado para seu pet
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Devolvendo <span className="text-primary">mobilidade</span> e{" "}
              <span className="text-secondary">dignidade</span> aos nossos melhores amigos
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Criamos cadeiras de rodas, próteses e soluções de mobilidade personalizadas em impressão 3D.
              Cada peça é desenvolvida especialmente para o seu pet, com amor e tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Solicitar Avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-base transition-all"
              >
                Conhecer Soluções
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">+120</p>
                <p className="text-sm text-muted-foreground">Pets atendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">95%</p>
                <p className="text-sm text-muted-foreground">Aprovação</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">8</p>
                <p className="text-sm text-muted-foreground">Parcerias ONGs</p>
              </div>
            </div>
          </div>

          <div className="relative max-w-[460px] lg:max-w-[520px] mx-auto lg:ml-auto w-full">
            <div className="relative h-[420px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-dog2.jpg"
                alt="Cachorro em avaliação com prótese e tecnologia de escaneamento para mobilidade pet"
                fill
                sizes="(max-width: 1024px) 460px, 520px"
                className="object-cover object-[38%_center]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Feito com amor</p>
                  <p className="text-sm text-muted-foreground">Para cada pet</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}