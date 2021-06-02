const menuU = require('../menus/menuU');
const menuG = require('../menus/menuP');
const banco = require('../banco');
const stages = require('../stages');

function execute (user, msg) {
    var msgCNR = 'Desculpa😐!\n❌ Opção inválida!'; // mensagem de Comando Não Reconhecido 
    var menu = '';

    if (!menuU.menu[parseInt(msg)] && msg != 'MENU') {
        var resultUnidades = stages.step[2].obj.execute(user, msg);
        
        var menuUnidades = resultUnidades[0];
        menuUnidades.unshift(msgCNR);

        var posUnidades = resultUnidades[1];
        posUnidades.unshift('msg');

        return [menuUnidades, posUnidades];
    }

    if (msg == 'MENU') {
        banco.db[user].stage = 'x';

        menu += 'Selecione uma das opções abaixo:\n';

        Object.keys(menuG.menu).forEach((value) => {
            var e = menuG.menu[value];
            menu += `*${value}* - ${e}`;
        });

        return [[menu], ['msg']];
    }

    if (msg == '1') {
        return stages.step[3.1].obj.execute(user, msg);
    }

    if (msg == '2') {
        return stages.step[3.2].obj.execute(user, msg);
    }

    if (msg == '3') {
        return stages.step[3.3].obj.execute(user, msg);
    }
}

exports.execute = execute;