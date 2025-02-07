## Documentação Técnica do Projeto - FIAP Hackaton

Este é o projeto desenvolvido durante o hackathon do curso de pós-graduação em FullStack Development da FIAP.

Membros do grupo:

- Felipe Dias Amorim Pessoa - RM355212 - felipediasamorimpessoa@gmail.com
- Sérgio Percevallis Neto - RM354791 - sergioneto261001@gmail.com
- Thiago Scheffer Fialho - RM353477 - thiago.sch.fialho@gmail.com

### Introdução

Este documento apresenta uma visão detalhada do projeto desenvolvido no Hackathon da FIAP. A aplicação foi implementada utilizando React Native com expo e Firebase. Trata-se de uma aplicação projetada para criar um ambiente acadêmico mais automatizado e organizado para alunos e alunas do ensino público, incluindo rotas de validação de presença e consulta as informações academicas.

Neste documento, detalhamos os passos para instalação, configuração e execução da aplicação, além de oferecer uma visão geral da arquitetura e da stack tecnológica empregada.

## O problema
Muitas escolas públicas ainda utilizam métodos tradicionais e pouco eficientes para gerenciar tarefas acadêmicas, controle de conteúdo e registro de presença, recorrendo a planilhas ou sistemas obsoletos que já não oferecem a mesma eficiência de antes. Para solucionar esse problema, desenvolvemos uma aplicação mobile integrada a uma plataforma web, permitindo um gerenciamento mais moderno e otimizado. Com recursos avançados como geolocalização, notificações push, autenticação biométrica e Face ID, além de diversas outras funcionalidades, nossa solução melhora significativamente a experiência de alunos, professores e coordenadores, tornando a gestão acadêmica mais ágil e eficaz.

### Setup Inicial

**Pré-requisitos:**

- nodejs v20+
- npm v10+
- conta google em conjunto com firebase
- emulador ou dispositivo físico para rodar a aplicação:
  - Android: Instale o Android Studio ou utilize um dispositivo real.
  - iOS: Xcode ou um iPhone físico.

**Instalação:**

1. Clone o repositório:<br>
   `git clone https://github.com/XFelipeX/fiap-hackathon-mobile.git`
2. Instale as dependências:<br>
   `npm install`

**Configuração:**
1. Adicione as suas configurações do firebase no arquivo `firebase.js`

```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

**Execução:**

1. Inicie o servidor de desenvolvimento do Expo:<br>
   `npm start`
2. Escaneie o QR Code com o Expo Go App (disponível para Android e iOS) ou inicie o emulador configurado.

## Arquitetura da Aplicação

O projeto adota uma abordagem modular, baseada em componentes reutilizáveis e funcionalidades independentes.

- Banco de dados: Integrado ao Firestore DB.
- Autenticação: Gerenciada via Firebase Auth e biometria com expo authentication.
- Armazenamento em Nuvem: Gerenciada via Firebase storage.
- Rotas: Configuradas utilizando o expo-router.
- Geolocalização: Com expo location

## Estrutura de Pastas

```
/assets        # Recursos estáticos como fontes e imagens
/components    # Componentes reutilizáveis
/routes        # Configuração das rotas
/app/screens   # Telas principais
/services      # Integração com APIs e outras funções de serviço
/styles        # Configurações de estilo global
/constants     # Cofigurações de constantes
/scripts       # Scripts de reset do expo
package.json   # Dependências e scripts do projeto

```

## Rotas

As rotas utilizam o expo-router, que permite a navegação declarativa e baseada em arquivos.

- Rotas públicas:
  - /login: Página de login.
- Rotas privadas:
  - /contact: Contato com a escola.
  - /examtimeline: Cronôgrama de provas.
  - /grade: Visualização de notas.
  - /main: Página com listagem das aulas do dia atual.
  - /materials: Visualizar conteúdos organizados por matérias.
  - /notifications: Páginas com notificações disparadas pelos coordenadores e/ou professores.
  - /presence: Tela para validar presença na aula.
  - /timeline: Cronôgrama de aulas.

## Estilização

A aplicação utiliza um esquema de cores dinâmico, configurado através de um hook personalizado chamado useColorScheme. Esse hook ajusta automaticamente o tema da aplicação (claro ou escuro) com base nas configurações do sistema operacional do usuário ou em uma preferência definida na aplicação.

## Stack utilizada

A stack tecnológica do projeto é composta por:

### **Frontend:**
  - **React Native** com **TypeScript**
  - **expo** como bundler e servidor de desenvolvimento
  - **libs** do **expo** para usar recursos do device

### **Bibliotecas auxiliares:**
- **Firebase** para autenticação e banco de dados
- **Expo Icons** para ícones na interface
- **Expo Location** para uso de geolocalização
- **Expo Authentication** para login com biometria
