import Image from "next/image"
import { Heart, Users, HandHeart, Star } from "lucide-react"

const stats = [
  {
    icon: Heart,
    value: "+120",
    label: "Pets atendidos",
    description: "Vidas transformadas",
  },
  {
    icon: Users,
    value: "8",
    label: "Parcerias com ONGs",
    description: "Trabalho em conjunto",
  },
  {
    icon: HandHeart,
    value: "35",
    label: "Casos sociais",
    description: "Apoio gratuito",
  },
  {
    icon: Star,
    value: "95%",
    label: "Aprovação dos tutores",
    description: "Satisfação garantida",
  },
]

export function SocialImpact() {
  return (
    <section
      id="impacto"
      className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-gradient-to-br from-secondary/5 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
                Impacto Social
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Fazendo a diferença na vida de{" "}
                <span className="text-secondary">quem mais precisa</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que todo animal merece uma chance de viver com dignidade. Por isso,
              mantemos parcerias com ONGs e abrigos para apoiar pets resgatados e de famílias
              em situação de vulnerabilidade social.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Parte de nossa receita é destinada a casos sociais, oferecendo soluções de
              mobilidade gratuitas ou com descontos especiais para animais que foram
              abandonados ou que vivem em lares de baixa renda.
            </p>

            <blockquote className="rounded-2xl border border-secondary/20 bg-card/70 backdrop-blur-sm p-6 shadow-sm">
              <p className="italic text-foreground/80">
                &quot;Cada pet que volta a caminhar é uma família que volta a sorrir.
                Esse é o nosso maior propósito.&quot;
              </p>
              <footer className="text-sm text-muted-foreground mt-3">
                — Equipe Move Pet
              </footer>
            </blockquote>
          </div>

          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pet-wheelchair-3.jpg"
                alt="Pet feliz com cadeira de rodas em ambiente de cuidado"
                width={700}
                height={500}
                className="object-cover w-full h-[360px] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-4 py-2 border border-white/20">
                  <p className="text-white text-sm md:text-base font-semibold">
                    Juntos, transformamos realidades
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold text-foreground">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}