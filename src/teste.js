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
        var resp = stages.step[getStage(contato)].obj.execute();

        for (var i = 0; i < resp.length; i++) {
            const e = resp[i];
            client.startTyping(contato);
            await delay(3000); // Esperando 3 seg
            client.sendText(contato, e);
        }
        client.stopTyping(contato);
    });
}