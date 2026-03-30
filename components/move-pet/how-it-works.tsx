import { ClipboardCheck, Pencil, Printer, Wrench } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Avaliação do Pet",
    description:
      "Iniciamos com uma avaliação completa das necessidades do seu pet, considerando condição física, porte e estilo de vida.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Projeto Personalizado",
    description:
      "Nossa equipe desenvolve um projeto exclusivo utilizando modelagem 3D, garantindo o ajuste perfeito para seu companheiro.",
  },
  {
    icon: Printer,
    step: "03",
    title: "Produção em Impressão 3D",
    description:
      "Utilizamos tecnologia de ponta em impressão 3D com materiais sustentáveis, leves e de alta durabilidade.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Ajuste e Adaptação Final",
    description:
      "Realizamos os ajustes necessários para garantir conforto total e acompanhamos a adaptação do pet ao novo equipamento.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Um processo simples e cuidadoso
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Do primeiro contato à entrega, cada etapa é pensada para oferecer a melhor
            experiência para você e seu pet.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-primary-foreground/20" />
              )}

              <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all">
                {/* Step Number */}
                <span className="absolute -top-4 -right-2 text-6xl font-bold text-primary-foreground/10">
                  {item.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-secondary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{item.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
