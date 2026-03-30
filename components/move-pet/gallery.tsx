"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/pet-wheelchair-1.jpg",
    alt: "Cachorro branco com cadeira de rodas personalizada",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pet-wheelchair-2.jpg",
    alt: "Gato com cadeira de rodas adaptada",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/pet-wheelchair-7.jpg",
    alt: "Passarinho com suporte de mobilidade 3D",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pet-wheelchair-4.jpg",
    alt: "Pet com prótese 3D moderna",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pet-wheelchair-5.jpg",
    alt: "Bulldog francês com suporte de mobilidade",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/pet-wheelchair-6.jpg",
    alt: "Corgy com cadeira de rodas personalizada",
    span: "col-span-2 row-span-1",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section
      id="galeria"
      className="scroll-mt-20 lg:scroll-mt-24 py-24 lg:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Histórias que nos inspiram
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada imagem representa uma vida transformada. Conheça alguns dos pets que
            recuperaram sua mobilidade e alegria com nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              className={`relative group overflow-hidden rounded-2xl ${image.span} shadow-sm hover:shadow-xl transition-all duration-300 text-left`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium leading-snug">
                  {image.alt}
                </p>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            <div
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Imagem ampliada"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}