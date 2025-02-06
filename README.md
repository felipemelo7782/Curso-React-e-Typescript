# React + TypeScript + Vite

## Sobre o Projeto

Este repositório foi criado para fornecer uma configuração inicial minimalista para quem deseja desenvolver aplicações React utilizando TypeScript e Vite. Ele já vem configurado com suporte a Hot Module Replacement (HMR) e algumas regras básicas do ESLint.

Se você está começando com React, essa é uma ótima base para iniciar seus projetos de maneira rápida e eficiente!

## Plugins Oficiais Disponíveis

Atualmente, dois plugins oficiais estão disponíveis para otimizar o desenvolvimento:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**: Usa o [Babel](https://babeljs.io/) para proporcionar Fast Refresh.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**: Utiliza o [SWC](https://swc.rs/) para um desempenho ainda melhor com Fast Refresh.

## Como Usar

### Instalação

Para começar, clone este repositório e instale as dependências:

```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```
###Executando o Projeto

Depois de instalar as dependências, você pode rodar o projeto com:

```sh
npm run dev
```

O servidor de desenvolvimento será iniciado, e você poderá acessar a aplicação em http://localhost:5173 (ou outra porta, se a padrão já estiver em uso).

##Configuração do ESLint

Se você deseja melhorar ainda mais a qualidade do código, pode expandir a configuração do ESLint para habilitar regras de lint com reconhecimento de tipos.

Passos para Configuração
Atualize o parserOptions no arquivo de configuração:
```sh
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```
Substitua tseslint.configs.recommended por tseslint.configs.recommendedTypeChecked ou tseslint.configs.strictTypeChecked.
Opcionalmente, adicione ...tseslint.configs.stylisticTypeChecked.
Instale o eslint-plugin-react e atualize a configuração:
```sh
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

Feito com ❤️ por **[Felipe Melo](https://github.com/felipemelo7782)** 
