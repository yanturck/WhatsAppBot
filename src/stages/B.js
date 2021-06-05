const banco = require('../banco');
const menuG = require('../menus/menuP');

function resumo (resp, aluno, unidade, des) {
    return 'Resumo da sua solicitação:\n' +
            '*1* - Responsável👩👨: ' + '_' + resp + '_' + '\n' +
            '*2* - Aluno(a)👦👧: ' + '_' + aluno + '_' + '\n' +
            '*3* - Unidade📍: ' + '_' + unidade + '_' + '\n' +
            '*4* - Descrição🖊️: ' + '_' + des + '_';
}

function execute (user, msg) {
    var msgCNR = 'Desculpa😐!\n❌ Opção inválida!'; // mensagem de Comando Não Reconhecido 
    var menu = '';

    var nomeResponsavel = banco.db[user].dados['nomeResponsavel'];
    var nomeAluno = banco.db[user].dados['nomeAluno'];
    var nomeUnidade = banco.db[user].dados['nomeUnidade'];
    var descricao = banco.db[user].dados['descricao'];

    var confirmacao = 'Caso o Sr(a). deseja alterar algum dos tópicos anteriores, _Digite o número correspondente_, ' +
                    'se estiver tudo correto, _Digite *OK*_.';

    var modoED = banco.db[user].modoED;
    var modoOP = banco.db[user].modoOP;
    var stage = banco.db[user].subStage;

    if (msg == 'MENU') {
        menu += 'Selecione uma das opções abaixo:\n';

        Object.keys(menuG.menu).forEach((value) => {
            var e = menuG.menu[value];
            menu += `*${value}* - ${e}`;
        });

        banco.db[user].stage = 'x';
        return [[menu], ['msg']];
    }

    if (modoOP == false) {
        if (stage == 1) {
            banco.db[user].dados['nomeResponsavel'] = msg;
            nomeResponsavel = msg;

            if (modoED == false) {
                var msg1 = 'Agora, informe o nome completo do(a) *Aluno(a)*👦👧:';
                banco.db[user].subStage = 2;
                return [[msg1], ['msg']];
            }
            if (modoED == true) {
                banco.db[user].modoOP = true;
                return [[resumo(nomeResponsavel, nomeAluno, nomeUnidade, descricao), confirmacao], ['msg', 'msg']];
            }

        } 
        if (stage == 2) {
            banco.db[user].dados['nomeAluno'] = msg;
            nomeAluno = msg;

            if (modoED == false) {
                var msg2 = 'Nome da *Unidade*📍:'
                banco.db[user].subStage = 3;
                return [[msg2], ['msg']];
            }
            if (modoED == true) {
                banco.db[user].modoOP = true;
                return [[resumo(nomeResponsavel, nomeAluno, nomeUnidade, descricao), confirmacao], ['msg', 'msg']];
            }

        }
        if (stage == 3) {
            if (msg != 'AFRICANOS' && msg != 'CALHAU' && msg != 'TURU') {
                return [['Digite uma *Unidade*📍 valida!🙇‍♂️\n' +
                        'Como _Africanos_, _Calhau_ ou _Turu_.'],['msg']];
            }
            
            banco.db[user].dados['nomeUnidade'] = msg;
            nomeUnidade = msg;

            if (modoED == false) {
                var msg3 = 'Por fim, descreva a sua solicitação🖊️:'
                banco.db[user].subStage = 4;
                return [[msg3], ['msg']];
            }
            if (modoED == true) {
                banco.db[user].modoOP = true;
                return [[resumo(nomeResponsavel, nomeAluno, nomeUnidade, descricao), confirmacao], ['msg', 'msg']];
            }

        }
        if (stage == 4) {
            banco.db[user].dados['descricao'] = msg;
            descricao = msg;

            if (modoED == false) {
                banco.db[user].modoED = true;
                banco.db[user].modoOP = true;
                return [[resumo(nomeResponsavel, nomeAluno, nomeUnidade, descricao), confirmacao], ['msg', 'msg']];
            }
            if (modoED == true) {
                banco.db[user].modoOP = true;
                return [[resumo(nomeResponsavel, nomeAluno, nomeUnidade, descricao), confirmacao], ['msg', 'msg']];
            }
        }
    }

    if (modoOP == true) {
        if (msg == '1') {
            banco.db[user].modoOP = false;
            banco.db[user].subStage = 1;
            return [['Digite o nome completo do(a) *Responsável*👩👨:'], ['msg']];
        }
        if (msg == '2') {
            banco.db[user].modoOP = false;
            banco.db[user].subStage = 2;
            return [['Digite o nome completo do(a) *Aluno(a)*👦👧:'], ['msg']];
        }
        if (msg == '3') {
            banco.db[user].modoOP = false;
            banco.db[user].subStage = 3;
            return [['Digite o nome do *Unidade*📍:'], ['msg']];
        }
        if (msg == '4') {
            banco.db[user].modoOP = false;
            banco.db[user].subStage = 4;
            return [['Descreva sua solicitação🖊️:'], ['msg']];
        }
        if (msg == 'OK' || msg == '0K.' || msg == '0K!') {
            banco.db[user].modoED = false;
            banco.db[user].modoOP = false;
            banco.db[user].stage = 'x';
            return [['OK! Sua solicitação foi realizada, agora aguarde um dos nossos funcionários entrar em contato com Sr(a).🥰'], ['msg']];
        }
        return [[msgCNR], ['msg']];
    }
}

exports.execute = execute;