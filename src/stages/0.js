const menuG = require('../menu');

function execute (user, msg, contato) {
    const msgSaudacao = 'Olá! Seja bem vindo a Escola Flamengo⚽.\n' +
                        'Prazer, eu sou seu assistente virtual Fla 🤖. Diga, no que posso lhe ajudar?';
    
    var menu = 'Selecione uma das opções abaixo:\n';

    Object.keys(menuG.menu).forEach((value) => {
        var e = menuG.menu[value];
        menu += `${value} - ${e}`;
    });

    const msgAccMenu = 'Vc pode acessa esse menu a qualquer momento digitando: *MENU*';

    return [msgSaudacao, menu, msgAccMenu];
}

exports.execute = execute;