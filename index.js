// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

const msgSaudacao = 'Olá! Sou assistente virtual do Yan, no momento ele não poderá responde sua mensagem escreva seu recado que assim que possível ele retornará.\n';
const msgMenu = 'Selecione uma das opções abaixo:\n' + 
                '*1* - Mensalidades\n' + 
                '*2* - Consultar Pendências\n' + 
                '*3* - Saber sobre um Aluno\n' + 
                'Vc pode acessa esse menu a qualquer momento digitando: *MENU*';

function start(client) {

  client.onMessage((message) => {
    var mensagem = message.body;

    client
        .sendText(message.from, msgSaudacao + msgMenu)
        .then()
        .catch();

    switch(mensagem){
        case '1':
            client
                .sendText()
                .then()
                .catch();
            break;
        case '2':
            break;
        case '3':
            break;
    };

    // if (mensagem === 'Oi' && message.isGroupMsg === false) {
    //   client
    //     .sendText(message.from, msgSaudacao)
    //     .then((result) => {
    //     //   console.log('Result: ', result); //return object success
    //     })
    //     .catch((erro) => {
    //       console.error('Error when sending: ', erro); //return object error
    //     });
    // }
  });
}