const menuU = require('../menus/menuU');

function execute () {
    var menu = 'Selecione uma das *Unidades* abaixo:\n';

    Object.keys(menuU.menu).forEach((value) => {
        var e = menuU.menu[value];
        menu += `*${value}* - ${e}`;
    });

    const msgAccMenu = '*MENU* - _Para voltar ao Menu Principal_';

    const resposta = [menu, msgAccMenu];
    const posicao = ['msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;