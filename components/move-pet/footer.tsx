import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#impacto", label: "Impacto Social" },
  { href: "#galeria", label: "Galeria" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo-movepet.png"
                alt="Logo Move Pet"
                width={520}
                height={180}
                className="h-42 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-background/70 leading-relaxed mb-3 max-w-md">
              Desenvolvemos soluções de mobilidade personalizadas em impressão 3D para pets.
            </p>

            <p className="text-background/50 mb-6 max-w-md">
              Tecnologia, cuidado e inclusão para devolver liberdade a quem faz parte da família.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background group-hover:text-secondary-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-background/70">contato@movepet.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-background/70">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-background/70">São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Move Pet. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50">
            Feito com ❤️ para os nossos melhores amigos
          </p>
        </div>
      </div>
    </footer>
  )
}