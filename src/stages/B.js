const banco = require('../banco');

function execute (user, msg) {
    var resumo = 'Resumo da sua solicitação:\n' +
                        '*1* - Responsável:' + '_' + banco.db[user].dados['nomeResponsável'] + '_' + '\n' +
                        '*2* - Aluno(a):' + '_' + banco.db[user].dados['nomeAluno'] + '_' + '\n' +
                        '*3* - Unidade:' + '_' + banco.db[user].dados['nomeUnidade'] + '_' + '\n' +
                        '*4* - Descrição:' + '_' + banco.db[user].dados['descricao'] + '_';

    var confirmacao = 'Caso o sr(a). deseja alterar algum dos tópicos anteriores, _Digite o número correspondente_, ' +
                    'se estiver tudo correto, _Digite *OK*_.';

    var modoED = false;
    var modoOP = false;
    var stage = [];
    console.log(stage);

    if (stage.length == 0) {
        banco.db[user].dados['nomeResponsavel'] = msg;

        if (modoED == false) {
            var msg1 = 'Agora, informe o nome do *Aluno(a)*:';
            stage.push(1);
            return [[msg1], ['msg']];
        }
        if (modoED == true) {
            modoOP = true;
            return [[resumo, confirmacao], ['msg', 'msg']];
        }

    } 
    if (stage.length == 1) {
        banco.db[user].dados['nomeAluno'] = msg;

        if (modoED == false) {
            var msg2 = 'Nome da *Unidade*:'
            stage.push(1);
            return [[msg2], ['msg']];
        }
        if (modoED == true) {
            modoOP = true;
            return [[resumo, confirmacao], ['msg', 'msg']];
        }

    }
    if (stage.length == 2) {
        banco.db[user].dados['nomeUnidade'] = msg;

        if (modoED == false) {
            var msg3 = 'Por fim, descreva a sua solicitação:'
            stage.push(1);
            return [[msg3], ['msg']];
        }
        if (modoED == true) {
            modoOP = true;
            return [[resumo, confirmacao], ['msg', 'msg']];
        }

    }
    if (stage.length == 3) {
        banco.db[user].dados['descricao'] = msg;

        if (modoED == false) {
            modoED = true;
            modoOP = true;
            return [[resumo, confirmacao], ['msg', 'msg']];
        }
        if (modoED == true) {
            modoOP = true;
            return [[resumo, confirmacao], ['msg', 'msg']];
        }
    }

    if (modoED == true && modoOP == true) {
        if (msg == '1') {
            modoOP = false;
            stage = [];
            return [['Digite o nome do *Responsável*:'], ['msg']];
        }
        if (msg == '2') {
            modoOP = false;
            stage = [1];
            return [['Digite o nome do *Responsável*:'], ['msg']];
        }
        if (msg == '3') {
            modoOP = false;
            stage = [1, 1];
            return [['Digite o nome do *Unidade*:'], ['msg']];
        }
        if (msg == '4') {
            modoOP = false;
            stage = [1, 1, 1];
            return [['Descreva sua solicitação:'], ['msg']];
        }
        if (msg == 'OK' || msg == '0K.' || msg == '0K!') {
            modoED = false;
            modoOP = false;
            banco.db[user].stage = 'x';
            return [['OK! Sua solicitação foi realizada, agora aguarde um dos nossos funcionários entrar em contato com Sr(a).🥰'], ['msg']];
        }
    }
}

exports.execute = execute;