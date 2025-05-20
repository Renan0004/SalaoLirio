# Salão Lírio - Landing Page

Landing page moderna e responsiva para o Salão Lírio Cabeleireiro, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Headless UI

## Requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/salao-lirio.git
cd salao-lirio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

## Estrutura do Projeto

```
salao-lirio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BookingForm.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── images/
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Funcionalidades

- Design responsivo
- Animações suaves
- Formulário de agendamento integrado com WhatsApp
- Integração com Google Maps
- Links para redes sociais
- SEO otimizado

## Personalização

Para personalizar as cores, fontes e outros estilos, edite o arquivo `tailwind.config.js`.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 