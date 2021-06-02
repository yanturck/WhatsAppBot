function execute (user, msg) {
    const msg1 = 'A Unidade dos Africanos fica localizado📍:';

    const local = ['-2.5535677754237622', '-44.274787231438225', 'Unidade Africanos'];

    const msg2 = 'Seu funcionando tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                 'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' +
                 'Segue abaixo telefone para contato.';

    const contato = ['559885655655@c.us', 'Escola Fla Unidade Africanos'];

    const msgAccMenu = '*MENU* - _Para voltar ao Menu Principal_';

    const resposta = [msg1, local, msg2, contato, msgAccMenu];
    const posicao = ['msg', 'local', 'msg', 'cont', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;