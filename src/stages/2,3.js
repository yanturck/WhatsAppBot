function execute (user, msg) {
    const msg1 = 'A Unidade do Turu fica localizado📍:';

    const local = ['-2.508317382720364', '-44.225884631501415', 'Unidade São Luís/Turu'];

    const msg2 = 'Seu funcionamento tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                 'Segunda a Quinta das 8h às 12h e das 14h as 19h\n' + 
                 'Sexta é das 8h às 12h e das 14h as 18h\n' + 
                 'Segue abaixo telefone para contato.';

    const contato = ['559888265981@c.us', 'Escola Fla Unidade Turu'];

    const resposta = [msg1, local, msg2, contato];
    const posicao = ['msg', 'local', 'msg', 'cont'];

    return [resposta, posicao];
}

exports.execute = execute;