function execute () {
    const msg = 'Horários do Calhau📍:\n' +
                '*Terça* e *Quinta*\n' +
                '_Tarde_ ⛅\n' +
                '```Sub 13 e 11 às 16:00h\n```' +
                '```Sub 09 e 07 às 17:00h\n```' +
                '```Sub 05 às 18:00h```';
    
    const msgSub = 'Para vc que não sabe sobre as categorias🤔, digite *SUB* a qualquer momento.\n' +
                    'Ou *MENU* para voltar ao Menu Principal.';

    const resposta = [msg, msgSub];
    const posicao = ['msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;