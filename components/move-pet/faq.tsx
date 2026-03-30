"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como funciona a personalização?",
    answer:
      "Cada peça é desenvolvida exclusivamente para o seu pet. Iniciamos com uma avaliação detalhada (presencial ou virtual), coletando medidas e informações sobre a condição física. A partir disso, criamos um projeto 3D personalizado que passa por aprovação antes da produção.",
  },
  {
    question: "As peças servem para qualquer porte de pet?",
    answer:
      "Sim! Trabalhamos com pets de todos os portes, desde pequenos gatos e cães toy até raças de grande porte. Cada projeto é dimensionado especificamente para as características do seu animal, garantindo conforto e funcionalidade.",
  },
  {
    question: "Os materiais são resistentes?",
    answer:
      "Utilizamos polímeros de alta qualidade, desenvolvidos especialmente para impressão 3D, que são leves, resistentes e duráveis. Os materiais passam por testes rigorosos de resistência e são seguros para o contato com a pele do animal.",
  },
  {
    question: "A empresa atende casos sociais?",
    answer:
      "Sim, temos um programa especial de apoio social! Mantemos parcerias com ONGs e abrigos, oferecendo soluções gratuitas ou com descontos significativos para pets resgatados e famílias em situação de vulnerabilidade. Entre em contato para saber mais.",
  },
  {
    question: "Quanto tempo leva para receber a peça?",
    answer:
      "O prazo médio é de 10 a 15 dias úteis, considerando avaliação, projeto, produção e ajustes finais. Casos urgentes podem ser tratados com prioridade mediante consulta prévia.",
  },
  {
    question: "Vocês oferecem garantia?",
    answer:
      "Sim! Todas as nossas peças possuem garantia de 6 meses contra defeitos de fabricação. Além disso, oferecemos suporte contínuo para ajustes e manutenção quando necessário.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Perguntas que você pode ter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Reunimos as principais dúvidas de nossos clientes. Não encontrou sua resposta?
              Entre em contato conosco.
            </p>
            <div className="p-6 bg-card rounded-2xl border border-border">
              <p className="font-semibold text-foreground mb-2">Ainda tem dúvidas?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Nossa equipe está pronta para ajudar você e seu pet.
              </p>
              <a
                href="#contato"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors"
              >
                Fale conosco →
              </a>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
