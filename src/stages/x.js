const menuG = require('../menus/menuP');
const banco = require('../banco');

function execute (user, msg) {
    var msgResposta = '';

    switch (msg) {
        case 'MENU':
            banco.db[user].stage = 0;
            
            msgResposta = 'Selecione uma das opções abaixo:\n';

            Object.keys(menuG.menu).forEach((value) => {
                var e = menuG.menu[value];
                msgResposta += `*${value}* - ${e}`;
            });
            break;
        case '1':
            banco.db[user].stage = 1;
            msgResposta = 'Deixa eu te apresentar a maior rede de franquia de futebol do país🇧🇷. ' +
                          'Temos mais de 1.000 unidades espalhadas por todo o Brasil🌎.';
            break;
        case '2':
            banco.db[user].stage = 2;
            break;
        case '3':
            banco.db[user].stage = 3;
            break;
        case '4':
            banco.db[user].stage = 4;
            break;
        case '5':
            banco.db[user].stage = 1;
            break;
        case '6':
            banco.db[user].stage = 1;
            break;
        default:
            msgResposta = 'Desculpa😐!\n❌ Opção inválida!'; // mensagem de Comando Não Reconhecido 
            break;
    }
    return [msgResposta, 'msg'];
}

exports.execute = execute;