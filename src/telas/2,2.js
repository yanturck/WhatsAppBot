function execute (user, msg) {
    const msg1 = 'A Unidade do Calhau fica localizado📍:';

    const local = ['-2.4834286584426195', '-44.241763309085215', 'Unidade Calhau'];

    const msg2 = 'Seu funcionando por *ligação* ou *WhatsApp*:\n' + 
                 'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' + 
                 'Atendimento *Presencial*:\n' + 
                 'Terças e Quintas das 8h às 12h e das 14h às 19h.\n' + 
                 'Segue abaixo telefone para contato.';

    const contato = ['559887354933@c.us', 'Escola Fla Unidade Calhau'];

    const msgAccMenu = '*MENU* - _Para voltar ao Menu Principal_';

    const resposta = [msg1, local, msg2, contato, msgAccMenu];
    const posicao = ['msg', 'local', 'msg', 'cont', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;