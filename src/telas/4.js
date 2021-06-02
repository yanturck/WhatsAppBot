function execute (user, msg) {
    const msg1 = 'O seu investimento será de:\n\n' +
                '*Unidade Africanos*📍\n' +
                '```Matrícula: R$ 115,00.```💰\n' +
                '```Mensalidade: valor normal R$ 115,00. Pagando até o vencimento fica R$ 105,00.```💸\n' +
                '```Convênios/irmãos: R$ 100,00.```👦👦\n\n' +
                '*Unidade Calhau*📍\n' +
                '```Matrícula: R$ 155,00.```💰\n' +
                '```Mensalidade: valor normal R$ 165,00. Pagando até o vencimento fica R$ 155,00.```💸\n' +
                '```Convênios/irmãos: R$ 134,98.```👦👦\n\n' +
                '*Unidade Turu*📍\n' +
                '```Matrícula: R$ 145,00.```💰\n' + 
                '```Mensalidade: valor normal R$ 155,00. Pagando até o vencimento fica R$ 145,00.```💸\n' +
                '```Convênios/irmãos: R$ 129,00.```👦👦';

    const msgAccMenu = '*MENU* - _Para voltar ao Menu Principal_';
    
    const resposta = [msg1, msgAccMenu];
    const posicao = ['msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;