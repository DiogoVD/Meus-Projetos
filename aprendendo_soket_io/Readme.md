Projeto de estudo socke io
tutorial seguido:
https://blogjavascript.com.br/post/criando-uma-aplicacao-de-chat-em-tempo-real-com-javascript

https://socket.io/get-started/chat

https://socket.io/pt-br/docs/v4/emitting-events/

para iniciar um projeto

- npm init
- npm install socket.io express

-criar o arquivo server.js

-no arquivo index.html inserir o script: <script src="/socket.io/socket.io.js"></script>
-----Dicas------
broadcast - envia a resposta para todos os clientes exceto o que mandou a mensagem.
emit - envia a resposta para todos os clientes conectados
