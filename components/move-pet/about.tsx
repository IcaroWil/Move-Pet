import { CheckCircle2 } from "lucide-react"

const features = [
  "Inclusão e acessibilidade para todos os pets",
  "Dignidade e qualidade de vida",
  "Conforto personalizado",
  "Tecnologia de ponta em impressão 3D",
  "Preços acessíveis",
  "Impacto social positivo",
]

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Transformando vidas através da{" "}
                <span className="text-primary">tecnologia</span> e do{" "}
                <span className="text-secondary">amor</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              A Move Pet nasceu da crença de que todo animal merece viver com dignidade e liberdade.
              Somos uma empresa dedicada a criar soluções de mobilidade personalizadas para pets
              com necessidades especiais, utilizando tecnologia de impressão 3D e muito carinho.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada projeto é desenvolvido individualmente, considerando as características únicas
              de cada pet — seu porte, condição física e estilo de vida. Nosso compromisso vai
              além do produto: buscamos promover inclusão, sustentabilidade e impacto social
              através de parcerias com ONGs e projetos de apoio a animais resgatados.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
                  <p className="text-5xl font-bold">+3</p>
                  <p className="mt-2 text-primary-foreground/80">Anos de experiência</p>
                </div>

                <div className="rounded-2xl bg-card p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-5xl font-bold text-secondary">100%</p>
                  <p className="mt-2 text-muted-foreground">Personalizado</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-card p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-5xl font-bold text-accent">24h</p>
                  <p className="mt-2 text-muted-foreground">Retorno garantido</p>
                </div>

                <div className="rounded-2xl bg-secondary p-8 text-secondary-foreground shadow-lg">
                  <p className="text-5xl font-bold">♻️</p>
                  <p className="mt-2 text-secondary-foreground/80">Sustentável</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}