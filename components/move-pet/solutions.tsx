import { Accessibility, Bone, Settings2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: Accessibility,
    title: "Cadeiras de Rodas Personalizadas",
    description:
      "Projetadas especificamente para cada pet, nossas cadeiras oferecem mobilidade, conforto e liberdade. Materiais leves e resistentes para uso diário.",
    features: ["Ajuste perfeito", "Leve e resistente", "Fácil higienização"],
    color: "primary",
  },
  {
    icon: Bone,
    title: "Próteses em Impressão 3D",
    description:
      "Soluções protéticas sob medida para pets que perderam membros. Tecnologia avançada que devolve funcionalidade e qualidade de vida.",
    features: ["Modelagem digital", "Alta precisão", "Conforto garantido"],
    color: "secondary",
  },
  {
    icon: Settings2,
    title: "Suportes e Adaptações",
    description:
      "Dispositivos de apoio personalizados para diversas condições. Desde suportes lombares até adaptações para necessidades específicas.",
    features: ["100% customizável", "Diversos materiais", "Design ergonômico"],
    color: "accent",
  },
]

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tecnologia e carinho em cada detalhe
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvemos soluções completas de mobilidade para pets, sempre com foco na
            qualidade de vida e bem-estar do seu companheiro.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const colorClasses = {
              primary: {
                bg: "bg-primary/10",
                iconBg: "bg-primary",
                text: "text-primary",
                hover: "group-hover:bg-primary/20",
              },
              secondary: {
                bg: "bg-secondary/10",
                iconBg: "bg-secondary",
                text: "text-secondary",
                hover: "group-hover:bg-secondary/20",
              },
              accent: {
                bg: "bg-accent/10",
                iconBg: "bg-accent",
                text: "text-accent",
                hover: "group-hover:bg-accent/20",
              },
            }[solution.color]

            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl border border-border p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl ${colorClasses?.iconBg} flex items-center justify-center mb-6`}
                >
                  <solution.icon className="w-8 h-8 text-card" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${colorClasses?.iconBg}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className={`${colorClasses?.text} hover:${colorClasses?.bg} p-0 h-auto font-semibold group/btn`}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
