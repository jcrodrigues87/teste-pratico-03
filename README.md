<h1 align="center">
    Teste Prático
</h1>

# 💻 Sobre o projeto

👨‍💻 Este teste prático foi desenvolvido com a finalidade de por meus conhecimentos sobre desenvolvido web a prova.

## 🌩️ Problema
- Uma empresa deseja implementar um canal de relacionamento com prestadores de serviços.

## 🌅 Solução
- Desenvolver uma aplicação web para que os prestadores de serviço façam seu cadastro e envie a documentação necessária.

---

## 🎨 Layout

- Disponíveis em ***assets*** da pasta principal

---
## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta back-end) 
2. Frontend (pasta front-end)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [PostgreSQL](https://www.postgresql.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MaykonLacerda/teste-pratico-03.git
# Acesse a pasta do projeto no terminal/cmd
$ cd teste-pratico-03
# Vá para a pasta back-end
$ cd back-end
# Instale as dependências
$ yarn

```
 #### Agora você precisa rodar as migrations do TypeORM. Antes de realizar esta etapa, primeiro você deve configurar seu banco de dados e as variáveis de ambiente.
 - #### ***Banco de dados:*** Acesse o bash do PostgreSQL e digite: 
 ```bash
 #Obs.: Verifque que o banco de dados seja criado no usuário correto do Postgres, ao qual você tem os dados de usuário e senha.
 $ CREATE DATABASE database_teste_pratico;
```

- #### ***Variáveis de ambiente:*** Renomeie o arquivo '.env.example' para '.env'


```bash
#(Os dados que estão aqui são somente um exemplo, podem ser alterados)

##Adicione a porta em que o back-end irá iniciar
PORT=3333

##Adicione as informações do banco Postgres para o TypeORM
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=database_teste_pratico

#Obs.: Verifique que os dados do banco sejam os mesmos das variáveis de ambiente.
```
#### 🧭 Rodando a aplicação web (Frontend)

```bash
# Clone este repositório (caso não tenha feito anteriormente)
$ git clone git@github.com:MaykonLacerda/teste-pratico-03.git
# Acesse a pasta do projeto no seu terminal/cmd
$ cd teste-pratico-03
# Vá para a pasta da aplicação Front End
$ cd front-end
# Instale as dependências
$ yarn
# Execute a aplicação em modo de desenvolvimento
$ yarn start
# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```


