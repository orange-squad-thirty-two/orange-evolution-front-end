# Projeto do desafio do Hackathon - Programa de Formação Season 4

## Orange Evolution - Front-end

Aplicação com o objetivo de disponibilizar cursos gratuitos para quem deseja estudar sobre tecnologis. Aplicação conta inicialmente com 3 trilhas:

- Desenvolvimento Full Stack
- Ux/Ui Designer
- QA (Quality Assurance).

## Requisitos

- NodeJs v16.15.1
- ReactJs

## Tecnologias usadas

- ReactJs
- ContextApi
- Tailwindcss
- React-router-dom

## Funcionalidades

- Cadastro de novos usuários
- Listagem de Trilhas (cursos)
- Listagem de aulas por trilha
- Seleção da trilha por parte do usuários
- Consumo do conteúdo da trilha
- Progresso do consumo do conteúdo
- Área de administrado
- Adicionar novas aulas - Somente administrado
- Editar aula - Somente administrado
- Apagar aula - Somente administrado

## Rodando localmente

#### clone o repositório

Usando chave ssh

```bash
  git@github.com:orange-squad-thirty-two/orange-evolution-front-end.git
```

Sem chave ssh

```bash
  https://github.com/orange-squad-thirty-two/orange-evolution-front-end.git
```

### Entrar na pasta

```bash
  cd orange-evolution-front-end
```

Instalar as dependencias

```bash
  npm install
```

Start na aplicação

```bash
  npm start
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

- Renomei o arquivo `.env.exemple` para `.env.development.local`

- Altere os valores das variáveis para os valores que você usa no banco de dados que esta instalado na sua máquina

```bash
REACT_APP_BASE_URI=

```

Observação: Para rodar a aplicação front-end é preciso que a API esteja rodando. Seguir passos do repositório do [back-end](https://github.com/orange-squad-thirty-two/orange-evolution-back-end).

## Autor

- [@eemr3](https://www.github.com/eemr3)
- [@afael93souza](https://github.com/rafael93souza)
- Joana Angelica
