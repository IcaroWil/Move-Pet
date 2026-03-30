import { Heart, Feather, Wallet, Ruler, Leaf, Shield } from "lucide-react"

const benefits = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Tratamos cada caso com carinho, entendendo as necessidades únicas de cada pet e família.",
  },
  {
    icon: Feather,
    title: "Materiais Leves e Resistentes",
    description: "Utilizamos materiais de alta qualidade que garantem durabilidade sem comprometer a mobilidade.",
  },
  {
    icon: Wallet,
    title: "Soluções Acessíveis",
    description: "Acreditamos que todo pet merece cuidado. Trabalhamos com preços justos e condições facilitadas.",
  },
  {
    icon: Ruler,
    title: "Personalização por Porte",
    description: "Cada peça é projetada especificamente para o porte e necessidade do seu companheiro.",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Comprometidos com o meio ambiente, utilizamos materiais eco-friendly em nossa produção.",
  },
  {
    icon: Shield,
    title: "Design para Conforto",
    description: "Ergonomia é prioridade. Cada detalhe é pensado para o máximo conforto e liberdade de movimento.",
  },
]

export function Benefits() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Por que escolher a Move Pet?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nossa missão é oferecer qualidade de vida com responsabilidade, carinho e tecnologia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
