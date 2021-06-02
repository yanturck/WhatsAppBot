function execute () {
    const msg = 'Horários da Africanos📍:\n' +
                '*Segunda* e *Quarta*\n' +
                '_Tarde_ ⛅\n' +
                '```Sub 17 às 15:00h```\n' +
                '```Sub 13 às 16:00h```\n' +
                '```Sub 11 às 17:00h```\n' +
                '\n' +
                '*Terça* e *Quinta*\n' +
                '_Manhã_ ☀️\n' +
                '```Sub 11 às 9:00h```\n' +
                '\n' +
                '_Tarde_ ⛅\n' +
                '```Sub 15 às 15:00h```\n' +
                '```Sub 09 às 16:00h```\n' +
                '```Sub 05 e 09 às 17:00h```';
    
    const msgSub = 'Para vc que não sabe sobre as categorias🤔, digite *SUB* a qualquer momento.\n' +
                    'Ou *MENU* para voltar ao Menu Principal.';

    const resposta = [msg, msgSub];
    const posicao = ['msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;