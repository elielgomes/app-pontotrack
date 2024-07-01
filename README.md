# AppTrack

<p align='center'>
  <img src='https://github.com/elielgomes/app-pontotrack/assets/108281436/9c94463b-f7ef-45dc-a08b-b6be13260d7a'/>
</p>

## 📌 Introdução

Bem-vindo ao **AppTrack**! Este projeto é uma aplicação web front-end desenvolvida para simular um serviço de rastreamento de veículos. A aplicação oferece uma interface responsiva e funcionalidades robustas para proporcionar uma experiência de usuário imersiva e eficiente.

## ⚙️ Instalação e Configuração

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior.

### 🔧 Passos para Configuração

1. **Clone o Repositório:**

```bash
git clone https://github.com/elielgomes/app-pontotrack.git
cd app-pontotrack
```

2. **Instale as Dependências:**

```bash
npm install
```

3. **Configuração das Variáveis de Ambiente:**

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Inicie a Aplicação:**

```bash
npm run dev
```

### 🛠 Conectando ao Backend

Para que o **AppTrack** funcione corretamente, é necessário clonar e configurar o backend (API). Siga os passos abaixo:

1. **Clone o Repositório da API:**

```bash
git clone https://github.com/elielgomes/api-pontotrack.git
cd api-pontotrack
```

2. **Siga as Instruções de Configuração da API:**

As instruções para configurar e iniciar a API estão detalhadas no [README da API](https://github.com/elielgomes/api-pontotrack).

3. **Inicie a API:**

Após seguir as instruções no README da API, inicie a API para que o front-end possa se comunicar com ela.

## ✏️ Descrição do Projeto

O **AppTrack** é uma aplicação web que oferece funcionalidades de CRUD (Create, Read, Update, Delete) de usuários. A arquitetura da aplicação segue padrões como MVVM e Compositions, além de princípios SOLID, garantindo uma estrutura sólida e escalável.

## 🛠️ Funcionalidades

- Autenticação de usuário.
- Registro e login de usuários.
- Atualização de informações do usuário.
- Alteração de senha.
- Seleção de tema para a aplicação.

## 🔗 Acesso ao Projeto

Você pode acessar o projeto clicando [aqui](https://apptrack-coral.vercel.app/) ou pelo link: https://apptrack-coral.vercel.app/

## 👨🏻‍💻 Tecnologias Utilizadas

- **[React](https://reactjs.org/)**: Biblioteca JavaScript para criação de interfaces de usuário interativas.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS para estilização eficiente.
- **[Next.js](https://nextjs.org/)**: Framework React para renderização do lado do servidor.
- **[Tanstack Query](https://tanstack.com/query)**: Biblioteca para gerenciamento de estado e busca de dados no cliente.
- **[Shadcn UI](https://shadcn.dev/)**: Componentes UI para React.
- **[Axios](https://axios-http.com/)**: Cliente HTTP para realizar requisições.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática opcional.
- **[Git/GitHub](https://github.com/)**: Controle de versão distribuído e plataforma de hospedagem de código-fonte.

## 📄 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](https://github.com/elielgomes/app-pontotrack/blob/main/LICENSE.md).

## ✒️ Autor

Feito por [Eliel Gomes](https://github.com/elielgomes).
