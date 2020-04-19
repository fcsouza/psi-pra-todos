<p align="center">
  <a href="" rel="noopener">
 <img src=".github\logo.png" alt="Project logo" width=250px></a>
</p>

<h1 align="center">Pandemic Hackfest Saúde 2020 - Projeto: PSI PARA TODOS</h1>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/languages/count/fcsouza/psi-pra-todos)]()
[![GitHub Pull Requests](https://img.shields.io/github/last-commit/fcsouza/psi-pra-todos)]()
[![Made By](https://img.shields.io/badge/Made%20By-Krakatoa%20Team-brightgreen)]()
[![License](https://img.shields.io/badge/license-GPL-blue)](/LICENSE.gpl)
[![Site](https://img.shields.io/badge/Clique%20me-%20para%20visualizar%20a%20plataforma-brightgreen)](https://psiparatodos.tk/)

</div>

---


## 📝 Conteúdo
<p align="center">
<a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#dev_acess">Acesso para plataforma</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#getting_started">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#built_using">Tecnologias Utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#contribute">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#authors">Autores</a>
</p>


## 🧐 Sobre <a name = "about"></a>

<p align="center">O Psi para Todos é um projeto de solução tecnológica desenvolvido no Hackaton Pandemic Hackfest Saúde 2020 pelo Krakatoa Team 7. Uma solução que une a população e psicólogos facilitando a conexão e agendamento de serviços psicológicos gratuito, de maneira simples, humana e segura, com apenas um clique!
    <br> 
</p>

<p align="center">
  <a href="" rel="noopener">
 <img width=650px src=".github\gif_video.gif" alt="Preview logo"></a>
</p>



## 🔩 Acesso para plataforma - Em desenvolvimento <a name = "dev_acess"></a>

[Clique para logar](https://psiparatodos.tk/login)

```

-Acesso Profissional
Login:profissional@profissional.com.br
Password:123456

-Acesso Paciente
Login:paciente@paciente.com.br
Password:123456

-Acesso Órgão
Login:orgao@orgao.com.br
Password:123456

```

## 🏁 Iniciando <a name = "getting_started"></a>

Instruções de como acessar as rotas e instalação.

### ⚒ Instalando <a name = "installing"></a>

```
git clone https://github.com/fcsouza/psi-pra-todos

Instalar o postgres caso queira executar o projeto em máquina local.

docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
docker run start database
create a database name => psiparatodos

Go into the backend repository
$ cd psi-pra-todos/backend

$ npm i || yarn install

# Run Migrations

$ npm sequelize db:migrate || yarn sequelize db:migrate 
$ npm run dev || yarn dev

# Go into the frontend repository

$ cd psi-pra-todos/frontend

$ npm i || yarn install
$ npm run serve || yarn serve
$ npm run build || yarn build
```

## Run API

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Psi%20para%20Todos%20API's&uri=https%3A%2F%2Fgithub.com%2Ffcsouza%2Fpsi-pra-todos%2Fblob%2Fmaster%2F.github%2Fapi_acess.json)

## ⛏️ Tecnologias Utilizadas <a name = "built_using"></a>

### Backend
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - Hash password module
- [JWT](https://www.npmjs.com/package/jsonwebtoken) - JWT(JSON Web Token) authentication.
- [Sequelize](https://sequelize.org/) - Multi SQL dialect ORM 
- [Yup](https://github.com/jquense/yup) - Simple Object schema validation
- [ESLint](https://eslint.org/) -  Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code
- [Nodemon](https://www.npmjs.com/package/nodemon) - Simple monitor script for use during development
- [Prettier](https://prettier.io/) - Opinionated Code Formatter
- [Sucrase](https://www.npmjs.com/package/sucrase) - Sucrase is an alternative to Babel that allows super-fast development builds

### Frontend
- [Vue.js](https://vuejs.org/) - The Progressive
JavaScript Framework
- [Bootstrap-vue](https://github.com/bootstrap-vue/bootstrap-vue) - Quickly integrate Bootstrap v4 components with Vue.js.

### Database
- [PostgreSQL](https://www.postgresql.org/) - Open source database(SGBD)

## 🤔 Como contribuir <a name = "contribute"></a>

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

## ✍️ Autores <a name = "authors"></a>

- [Amanda Barbosa -	Business](https://www.linkedin.com/in/amanda-barbosa-94064018a/)
- [Débora Costa -	Business](https://www.linkedin.com/in/debora-costa-38a56971/)
- [Erison Alexandre Pimenta - Full Stack](erisonalexandre12@gmail.com)
- [Fabrício Cavalcante - Backend](https://www.linkedin.com/in/fabricio-cavalcante/)
- [Jéssika Aguiar - Frontend](https://www.linkedin.com/in/jessika-aguiar)
- [Julio Ricardo - Design](https://www.linkedin.com/in/ojulior)
- [Silmara Lima - Psicologia](@silmaralimapsy)
- [Tatiane Rodrigues - Business](https://www.linkedin.com/in/tatiane-veridico-rodrigues-71766429)

## 🗒 Licença

Esse projeto está sob a licença GPL. Veja o arquivo [LICENSE](/LICENSE.gpl) para mais detalhes.