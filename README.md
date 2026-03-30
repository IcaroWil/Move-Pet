# Move Pet Landing Page

Landing page desenvolvida para a **Move Pet**, uma empresa fictícia criada para apresentação acadêmica, com foco em soluções de mobilidade para pets, como cadeiras de rodas, próteses e suportes personalizados produzidos com **impressão 3D**.

A proposta do projeto é apresentar uma marca com identidade visual forte, apelo emocional e proposta de valor clara para um público leigo, destacando **inclusão, acessibilidade, sustentabilidade e impacto social**.

---

## Visão geral

A **Move Pet** é uma empresa fictícia que desenvolve soluções personalizadas para melhorar a mobilidade e a qualidade de vida de animais com necessidades especiais.

A landing page foi criada com o objetivo de:

- apresentar a marca de forma profissional
- transmitir credibilidade e inovação
- valorizar o impacto social da proposta
- demonstrar um produto visualmente atrativo e fácil de entender
- servir como material de apresentação para trabalho de faculdade

---

## Funcionalidades da página

A landing page conta com as seguintes seções:

- Header fixo com navegação por âncoras
- Hero section com imagem principal e CTA
- Sobre a empresa
- Soluções oferecidas
- Como funciona
- Benefícios e diferenciais
- Impacto social
- Galeria de imagens
- Depoimentos
- FAQ
- Chamada final para contato
- Footer institucional

Além disso, a página inclui:

- layout responsivo
- favicon personalizado
- identidade visual baseada na logo da marca
- imagens personalizadas da proposta do projeto
- animações e microinterações sutis
- navegação suave entre seções

---

## Tecnologias utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **Vercel Analytics**

---

## Estrutura do projeto

```bash
movepet/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── move-pet/
│   ├── ui/
│   └── theme-provider.tsx
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   │   ├── hero-dog.jpg
│   │   ├── hero-dog2.jpg
│   │   ├── logo-movepet.png
│   │   ├── pet-wheelchair-1.jpg
│   │   ├── pet-wheelchair-2.jpg
│   │   ├── pet-wheelchair-3.jpg
│   │   ├── pet-wheelchair-4.jpg
│   │   ├── pet-wheelchair-5.jpg
│   │   ├── pet-wheelchair-6.jpg
│   │   └── pet-wheelchair-7.jpg
│   ├── icon.png
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── styles/
│   └── globals.css
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json