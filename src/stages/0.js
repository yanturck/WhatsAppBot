const menuG = require('../menus/menuP');
const banco = require('../banco');

function execute (user, msg) {
    const msgSaudacao = 'Olá! Seja bem vindo a Escola Flamengo⚽.\n' +
                        'Prazer, eu sou seu assistente virtual Fla 🤖. Diga, no que posso lhe ajudar?';
    
    var menu = 'Selecione uma das opções abaixo:\n';

    Object.keys(menuG.menu).forEach((value) => {
        var e = menuG.menu[value];
        menu += `*${value}* - ${e}`;
    });

    const msgAccMenu = 'Vc pode acessa esse menu a qualquer momento digitando: *MENU*';

    const resposta = [msgSaudacao, menu, msgAccMenu];
    const posicao = ['msg', 'msg', 'msg'];

    banco.db[user].stage = 'x';

    return [resposta, posicao];
}

exports.execute = execute;