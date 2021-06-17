<h1 align="center">
  <img alt="Create, innovate, inspire, code and test like a girl!" title="#MeuBanner" src="./banner.png" />
</h1>

<h2 align="center"> 
	🚧 Desafio Cubos Academy - módulo 2 🚀 em andamento... 🚧
</h2>

## 💻 Sobre o projeto
 Desafio do Módulo 2 do curso Programação do Zero, da <a href="https://www.cubos.academy/" target="_blank">Cubos Academy</a>, que consiste em reproduzir a página do arquivo .fig na raíz do projeto. Feito para testar o conhecimento adquirido em 4 semanas de curso. Nesse projeto utilizei o **ReactJS** (uma biblioteca/framework JavaScript feita para construir interfaces altamente interativas, com um código menos extenso e mais fácil de ler), [**Sass**](https://sass-lang.com/guide), conceitos de Hooks e Fetch API.

 ![](https://i.imgur.com/xG74tOh.png)

 ## Funcionalidades obrigatórias
- **Header**
  - **Input de busca**
    - Ao clicar na lupa ou apertar a tecla `Enter` deverá filtrar os filmes por **nome**
- **Seção de Top Filmes**
  - A seção de Top Filmes deve exibir os 5 primeiros filmes que retornarem [desta API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) (antes de integrar com a API por fetch, utilize o arquivo `data.js`)
- **Seção de Filmes**
  - A seção de Filmes deve exibir todos os filmes da lista que retornarem [desta API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) (antes de integrar com a API por fetch, utilize o arquivo `data.js`)
- **Sacola**
  - Adição/remoção de filmes
  - Deverá exibir o total da soma de todos os filmes adicionados
  - Ao clicar no botão de "sacola" dentro de um filme, esse filme deve ser adicionado à sacola
      - Caso ele não esteja na sacola, adicione-o com quantidade 1
      - Caso ele esteja na sacola, aumente a quantidade em 1
 ## Funcionalidades não obrigatórias
- **Conceitos**
  - Não usar estado quando uma variável bastaria
  - Componentização e organização de código
- **Funcionalidades**
  - Controlar o estado das requisições (erros e carregamento)

## Retorno da API
A API precisa de uma requisição GET padrão, sem headers e body.

Os únicos campos necessários da [API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) são os seguintes:
```json
  {
    "title": "Mortal Kombat",
    "poster_path": "https://image.tmdb.org/t/p/original/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
    "vote_average": 9,
    "price": 7.5
  }
```

<hr />

## 🎨 Layout
  Design retirado do [**figma**](https://www.figma.com/file/0uao1ougGtaO4MotuJgZ0k/Desafio-2-Front-end?node-id=0%3A1).

## 💡 Pré-requisitos
 - O primeiro passo é instalar o [**Git**](https://git-scm.com) em seu computador caso você ainda não o tenha. 
 - Os pacotes que iremos utilizar durante o desenvolvimento desse projeto serão gerenciados pelo **Node Package Manager** (NPM), então precisaremos instalá-lo. Vamos até o site oficial do [**Node.js**](https://nodejs.org/en/) para instalar sua versão LTS. Quando instalamos o Node.js, o **NPM** também é instalado no computador como parte do mesmo pacote. 
 - Através do NPM instalaremos o gerenciador de dependências **Yarn**.
 - Através do Yarn instalaremos em nosso projeto o [**Sass**](https://sass-lang.com/guide) (um CSS com super poderes!).
 - Além disto é interessante ter um bom editor para trabalhar com o código como por exemplo o [**VSCode**](https://code.visualstudio.com/download).

## 🚀 Como executar o projeto

```bash
# Clone este repositório
$ git clone https://github.com/MayllaRabay/desafio-modulo-2

# Acesse a pasta do projeto no seu terminal/cmd
$ cd desafio-modulo-2

# Instale o NPM caso não tenha baixado o Node.js
$ npm install

# Instale o gerenciador de dependências Yarn
$ npm install yarn

# Adicione o pré-processador do CSS, o Sass
$ yarn add sass

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse em seu navegador
http://localhost:3000
```

## 🛠 Tecnologias
  - ![ReactJS](https://img.shields.io/badge/-ReactJS-4682b4)
  - ![Sass](https://img.shields.io/badge/-Sass-ff6f9c)

## 📝 Licença
Este projeto possui a licença MIT.

## ✨ Extras
### Porque usar ReactJS?
 Com o React é mais fácil e prático de manipular a interface de acordo com o que o usuário poderá interagir, graças à tríade que o compoẽ: **COMPONENTES**, **PROPRIEADADES** e **ESTADOS**.

 Toda função dentro do React que retorna um HTML é um **COMPONENTE**! Os componentes facilitam a manutenção e a leitura do código, principalmente quando nossa aplicação começa a ficar grande, com muitas páginas, muitas linhas de código, muitas funcionalidades. O uso de componentes no React é excelente para evitar **repetição**, ou seja, quando temos o mesmo 'pedaço' de interface se repetindo ao longo da aplicação, um header ou footer por exemplo, nós podemos encapsular essa parte em um componente e utilizá-lo várias vezes dentro da nossa aplicação. 
 
 Além dos componentes serem uma forma de **reutilizarmos** código, eles também servem para **isolar as responsabilidades** de uma determinada funcionalidade, sendo assim mais fácil de resolver bugs e manter a integridade do código, com menos chance de quebrá-lo.
### FETCH API
 É uma função que serve para fazer requisições HTTP, muito parecida com o Axios, porém o fetch é nativo de navegadores. Ele recebe como primeiro parâmetro obrigatório uma URL, e parâmentros secundários opcionais, como por exemplo as 'options' da requisição em formato de objeto. Dentro desse objeto temos algumas propriedades como 'method', 'headers' e 'body'.

 Para mais informações, veja a [documentação do React](https://create-react-app.dev/docs/getting-started/) e a [documentação da Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).

## :bowtie: Autor
<a href="https://github.com/mayllarabay/">
 <img style="border-radius: 50%" src="https://avatars.githubusercontent.com/u/68441361?v=4" 
 width="100px" alt="" />
</a>

Feito com ❤️ por Maylla Rabay 👋 [Entre em contato!](https://www.linkedin.com/in/mayllarabay/)
