const venom = require('venom-bot');
const banco = require('./banco');
const stages = require('./stages');

const delay = ms => new Promise(res => setTimeout(res, ms));

const contato = '559884367826@c.us';

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function getStage (user) {
    return banco.db[user].stage;
}

// var resp = stages.step[getStage(contato)].obj.execute();

// for (var i = 0; i < resp.length; i++) {
//     const e = resp[i];
//     console.log(e);
// }

function start (client) {

    client.onMessage (async (message) => {
        var retorno = stages.step[getStage(contato)].obj.execute(contato, message);
        
        var resp = retorno[0];
        var posicao = retorno[1];

        for (var i = 0; i < posicao.length; i++) {
          const e = resp[i];
          const p = posicao[i];
          
          if (p == 'msg') {
            client.startTyping(contato);
            await delay(3000); // Esperando 3 seg
            client.sendText(contato, e);
            client.stopTyping(contato);
          } else if (p == 'gif') {
            client.startTyping(contato);
            await delay(3000); // Esperando 3 seg
            client.sendVideoAsGif(contato, e[0], e[1], e[2]);
            client.stopTyping(contato);
          } else if (p == 'local') {
            client.startTyping(contato);
            await delay(3000); // Esperando 3 seg
            client.sendLocation(contato, e[0], e[1], e[2]);
            client.stopTyping(contato);
          } else if (p == 'cont') {
            client.startTyping(contato);
            await delay(3000); // Esperando 3 seg
            client.sendContactVcard(contato, e[0], e[1]);
            client.stopTyping(contato);
          }
        }
    });
}