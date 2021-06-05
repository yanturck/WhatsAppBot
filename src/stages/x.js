const menuG = require('../menus/menuP');
const banco = require('../banco');
const stages = require('../stages');

function execute (user, msg) {
    var msgCNR = 'Desculpa😐!\n❌ Opção inválida!'; // mensagem de Comando Não Reconhecido 
    var menu = '';

    if (!menuG.menu[parseInt(msg)] && msg != 'MENU') {
        return [[msgCNR], ['msg']];
    }

    if (msg == 'MENU') {
        menu += 'Selecione uma das opções abaixo:\n';

        Object.keys(menuG.menu).forEach((value) => {
            var e = menuG.menu[value];
            menu += `*${value}* - ${e}`;
        });

        return [[menu], ['msg']];
    }

    if (msg == '1') {
        return stages.step[1].obj.execute(user, msg);
    }

    if (msg == '2') {
        banco.db[user].stage = 'y';
        return stages.step[2].obj.execute(user, msg);
    }

    if (msg == '3') {
        banco.db[user].stage = 'z';
        return stages.step[3].obj.execute(user, msg);
    }

    if (msg == '4') {
        return stages.step[4].obj.execute(user, msg);
    }

    if (msg == '6') {
        var msg1 = 'Para eu poder lhe ajudar, primeiro informe o nome do *Responsável* do aluno:';
        banco.db[user].stage = 'B';
        return [[msg1], ['msg']];
    }
}

exports.execute = execute;