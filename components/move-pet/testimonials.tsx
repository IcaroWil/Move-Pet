import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Clara Santos",
    pet: "Tutora do Thor",
    location: "São Paulo, SP",
    content:
      "O Thor tinha perdido a mobilidade das patas traseiras após um acidente. A Move Pet devolveu a alegria dele — e a nossa também. Ver ele correndo de novo foi emocionante demais. A qualidade da cadeira é incrível!",
    rating: 5,
  },
  {
    name: "João Pedro Oliveira",
    pet: "Tutor da Luna",
    location: "Rio de Janeiro, RJ",
    content:
      "A Luna nasceu com uma má-formação e achávamos que ela nunca poderia brincar como outros cães. A prótese feita pela Move Pet mudou tudo. O atendimento foi humanizado do início ao fim. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Ana Beatriz Costa",
    pet: "Tutora do Frederico",
    location: "Belo Horizonte, MG",
    content:
      "Meu gatinho Frederico foi atropelado e perdeu uma patinha. A equipe da Move Pet tratou ele com tanto carinho. A prótese se encaixou perfeitamente e ele se adaptou rapidinho. Sou muito grata por esse trabalho lindo.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            O que dizem sobre nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de tutores que confiaram na Move Pet para transformar a vida
            de seus companheiros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-lg transition-all group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Quote className="w-5 h-5 text-secondary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
