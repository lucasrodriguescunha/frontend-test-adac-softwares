# Figma Land

Landing page moderna e responsiva desenvolvida com React, TypeScript e Tailwind CSS, apresentando design clean e navegação intuitiva.

## 📋 Sobre o Projeto

Figma Land é uma aplicação web desenvolvida para demonstrar boas práticas de desenvolvimento front-end, com foco em responsividade, acessibilidade e experiência do usuário. O projeto apresenta um design moderno com navegação adaptativa para diferentes tamanhos de tela.

## ✨ Funcionalidades

- 🎨 Interface moderna e minimalista
- 📱 Design totalmente responsivo (Mobile, Tablet e Desktop)
- 🍔 Menu hambúrguer para navegação mobile/tablet
- ♿ Elementos com suporte a acessibilidade (ARIA labels)
- 🎯 Navegação entre páginas com React Router
- 🌙 Tema escuro elegante

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) - Biblioteca JavaScript para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Vite](https://vitejs.dev/) - Build tool e dev server
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [React Router DOM](https://reactrouter.com/) - Roteamento para aplicações React

## 📦 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/figma-land.git
```

2. Acesse o diretório do projeto
```bash
cd figma-land
```

3. Instale as dependências
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

5. Abra o navegador e acesse `http://localhost:5173`

## 🏗️ Estrutura do Projeto
```
figma-land/
├── src/
│   ├── assets/
│   │   └── icons/          # Ícones SVG
│   ├── components/
│   │   └── Header/         # Componentes do Header
│   │       ├── Header.tsx
│   │       └── LoginButton.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Componentes Principais

### Header
Componente de navegação principal com:
- Logo clicável que redireciona para a home
- Menu de navegação desktop
- Botão de Login
- Menu hambúrguer responsivo para mobile/tablet

### Navegação Responsiva
- **Desktop (≥1024px)**: Menu horizontal completo
- **Mobile/Tablet (<1024px)**: Menu hambúrguer com navegação em lista

## 🛠️ Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Linting
npm run lint
```

## 📱 Responsividade

O projeto utiliza breakpoints do Tailwind CSS:

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## ♿ Acessibilidade

O projeto segue as melhores práticas de acessibilidade:
- Uso adequado de tags semânticas HTML
- ARIA labels em elementos interativos
- Navegação por teclado
- Contraste adequado de cores

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feat/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feat/nova-feature`)
5. Abra um Pull Request

### Padrão de Commits

Este projeto segue o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula faltando, etc
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Atualização de build, configs, etc

## 👨‍💻 Autor

Desenvolvido com ❤️ por [Lucas Rodrigues Cunha](https://github.com/lucasrodriguescunha)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!