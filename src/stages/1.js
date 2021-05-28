
function execute (user, msg, contato) {
    const msg1 = 'Deixa eu te apresentar a maior rede de franquia de futebol do país🇧🇷. ' +
                 'Temos mais de 1.000 unidades espalhadas por todo o Brasil🌎.';
    
    const gif1 = ['gif/introFla.mp4', 'introFla.gif', ''];

    const msg2 = 'Somos ligadas diretamente com o Clube de Regatas do Flamengo🔴⚫,' +
                    ' os nossos alunos  participam de competições oficiais como: Copa Fla Local🏅, Copa Fla Nordeste🏆 e Copa Fla Brasil🇧🇷.\n' +
                    'O nosso principal objetivo é ensinar noções do futebol para meninos👦 e meninas👧 com idades de 04 a 18 anos.\n' +
                    'Apesar de não termos como objetivo a formação profissional dos nossos alunos,' +
                    ' a Escola Flamengo disponibiliza ferramentas que ajudam eles nesse sonho.' +
                    ' Scout, Mundialitos e as competições oficial🤝 além de indicação direta ao Club são uma dessas ferramentas.';
                
    const msg3 = 'Ah! _E todos os nossos alunos tem por direito um seguro contra acidente que já está incluído nas mensalidades_.' +
                    ' Esse seguro cobre despesas médicas👨‍⚕️ em caso de contusão dentro do campo em aula ou jogos que estejam jogando pela escola!';

    const msg4 = 'E tem muitoooos outros benefícios de ser um aluno Flamengo.\n' + 
                    'Veja a Unidade📍 mais próxima e agende sua aula experimental. 😉✌️\n\n' + 
                    'Faz teu nome jogador(a)!! ⚽';

    const msg5 = 'Digite *MENU* para voltar ao Menu Principal.';

    const resposta = [msg1, gif1, msg2, msg3, msg4, msg5];

    const posicao = ['msg', 'gif', 'msg', 'msg', 'msg', 'msg'];

    return [resposta, posicao];
}

exports.execute = execute;