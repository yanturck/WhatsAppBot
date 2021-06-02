function execute () {
    const msg = 'Horários do Turu📍:\n' +
                '*Segunda* e *Quarta*\n' +
                '_Manhã_ ☀️\n' +
                '```Sub 13 às 8:00h```\n' +
                '```Sub 15 e 17 às 9:00h```\n' +
                '\n' +
                '_Tarde_ ⛅\n' +
                '```Sub 17 às 15:00h```\n' +
                '```Sub 13 às 16:00h```\n' +
                '```Sub 11 às 17:00h```\n' +
                '```Sub 09 às 18:00h```\n' +
                '\n' +
                '*Terça* e *Quinta*\n' +
                '_Manhã_ ☀️\n' +
                '```Sub 09 e 11 às 8:30h```\n' +
                '\n' +
                '_Tarde_ ⛅\n' +
                '```Sub 16 às 15:00h```\n' +
                '```Sub 15 às 16:00h```\n' +
                '```Sub 07 às 17:00h```\n' +
                '```Sub 09 às 18:00h```';
    
    const msgSub = 'Para vc que não sabe sobre as categorias🤔, digite *SUB* a qualquer momento.\n' +
                    'Ou *MENU* para voltar ao Menu Principal.';

    const resposta = [msg, msgSub];
    const posicao = ['msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;