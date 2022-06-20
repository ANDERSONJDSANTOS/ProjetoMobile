# SAFEPASS

## DESCRIÇÃO

Esse é um projeto que tem como principal objetivo criar um aplicativo que armazene as senhas dos usuários de variadas contas, a pedido do usuario.

## API

### COMO SE RODAR

Para se rodar a api é necessário que se crie um arquivo **.env** dentro da pasta da api, você deve utilizar como base o arquivo **example.env** para criar o seu arquivo .env. Após isso apenas execute os seguintes comandos a seguir:

```
#Entra na pasta da api
cd api
#Instala as dependências da api
npm install
#Roda a aplicação em modo de desenvolvedor
npm run dev
```

### TESTANDO

Para se testar a api é necessário que você utilize os seguintes comandos

```
#Entra na pasta da api
cd api
#Executa os testes automatizados de integração
npm run test
```

## DOCKER

Caso você não queira instalar o mongo na sua máquina é possível usar ele com o docker, basta usar o seguinte comando:

```
#AO RODAR ESSE COMANDO VOCÊ TERÁ O MONGO DISPONÍVEL NESSE URL: mongodb://localhost:27017
docker compose up -d
```

## FRONTEND

### COMO SE RODAR

Para se rodar o frontend é necessário que primeiro você execute os seguintes comandos:

```
#Entra na pasta do frontend
cd mobile
#Instala as dependências do frontend
npm install
```

Após executar esses comandos, você terá a opção de rodar o app em sua versão web ou mobile

### WEB

Para rodar a versão web execute os seguintes comandos:

```
#Começa o app
npm run start
#Abre a versão web
w
```

### ANDROID

Para rodar a versão de android você deve digitar os seguintes comandos

```
#Começa o app
npm run start
# Roda a versão de android
a
```

É possível abrir o app no seu celular se você possuir o expo instalado no memso, para isso você deve executar o comando **npm run start**, e abrir o qr code que irá aparecer no seu terminal, no seu app do expo.