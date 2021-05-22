// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const delay = ms => new Promise(res => setTimeout(res, ms));

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

var pilha = [];

const destino = '559884915725@c.us';

const msgSaudacao = 'Olá! Seja bem vindo a Escola Flamengo⚽.\n' +
                    'Prazer, eu sou seu assistente virtual Fla 🤖. Diga, no que posso lhe ajudar?\n';

const msgCNR = 'Desculpa😐!\n❌ Opção inválida!'; // mensagem de Comando Não Reconhecido

const msgSub = 'Para vc que não sabe sobre as categorias🤔, digite *SUB* a qualquer momento.\n' +
                'Ou *MENU* para voltar ao Menu Principal.';

const menu = 'Selecione uma das opções abaixo:\n' + 
              '*1* - Vantagens de ser Aluno Fla🔴⚫\n' +
              '*2* - Unidades📍\n' +
              '*3* - Horários das Categorias⌚\n' +
              '*4* - Mensalidades💰\n' + 
              '*5* - Marcar Aula Experimental⚽\n' + 
              '*6* - Já sou Aluno🔍\n' + 
              'Vc pode acessa esse menu a qualquer momento digitando: *MENU*';

// ========================================= Unidades =========================================
const menuUnidades = 'Para conhecer melhor, selecione uma das *Unidades* abaixo:\n' + 
                      '*1* - Africanos📍\n' + '*2* - Calhau📍\n' + "*3* - Turu📍\n" +
                      '*MENU* - _Para voltar ao Menu Principal_';

function start(client) {

  client.onMessage(async (message) => {
    var mensagem = String(message.body).toUpperCase();

    if (pilha.length == 0) {
      client.startTyping(destino);
      await delay(5000); // Esperando 5 seg
      client.sendText(destino, msgSaudacao + menu);
      pilha.push('0');
      client.stopTyping(destino);
    } else if (pilha.length == 1) {
      switch(mensagem){
        case 'MENU':
          client.startTyping(destino);
          await delay(4000); // Esperando 4 seg
          client.sendText(destino, menu);
          client.stopTyping(destino);
          break;
        case '1':
          client.startTyping(destino);
          await delay(1000); // Esperando 1 seg
          client.sendText(destino, 'Deixa eu te apresentar a maior rede de franquia de futebol do país🇧🇷.' +
                                        ' Temos mais de 1.000 unidades espalhadas por todo o Brasil🌎.');
          client.startTyping(destino);
          await delay(500); // Esperando 0.5 seg
          client.sendVideoAsGif(destino, 'gif/introFla.mp4', 'introFla.gif', '');
          client.startTyping(destino);
          await delay(7000); // Esperando 7 seg
          client.sendText(destino, 'Somos ligadas diretamente com o Clube de Regatas do Flamengo🔴⚫,' +
                                        ' os nossos alunos  participam de competições oficiais como: Copa Fla Local🏅, Copa Fla Nordeste🏆 e Copa Fla Brasil🇧🇷.\n' +
                                        'O nosso principal objetivo é ensinar noções do futebol para meninos👦 e meninas👧 com idades de 04 a 18 anos.\n' +
                                        'Apesar de não termos como objetivo a formação profissional dos nossos alunos,' +
                                        ' a Escola Flamengo disponibiliza ferramentas que ajudam eles nesse sonho.' +
                                        ' Scout, Mundialitos e as competições oficial🤝 além de indicação direta ao Club são uma dessas ferramentas.');
          client.startTyping(destino);
          await delay(1000); // Esperando 1 seg
          client.sendText(destino, 'Ah! _E todos os nossos alunos tem por direito um seguro contra acidente que já está incluído nas mensalidades_.' +
                                        ' Esse seguro cobre despesas médicas👨‍⚕️ em caso de contusão dentro do campo em aula ou jogos que estejam jogando pela escola!');
          client.startTyping(destino);
          await delay(1000); // Esperando 1 seg
          client.sendText(destino, 'E tem muitoooos outros benefícios de ser um aluno Flamengo.\n' + 
                                        'Veja a Unidade📍 mais próxima e agende sua aula experimental. 😉✌️\n\n' + 
                                        'Faz teu nome jogador(a)!! ⚽');
          client.startTyping(destino);
          await delay(500); // Esperando 0.5 seg
          client.sendText(destino, 'Digite *MENU* para voltar ao Menu Principal.');
          client.stopTyping(destino);
          break;
        case '2':
          client.startTyping(destino);
          await delay(2000); // Esperando 2 seg
          client.sendText(destino, menuUnidades);
          pilha.push('2');
          client.stopTyping(destino);
          break;
        case '3':
          client.startTyping(destino);
          await delay(2000); // Esperando 2 seg
          client.sendText(destino, menuUnidades);
          pilha.push('3');
          client.stopTyping(destino);
          break;
        case '4':
          client.startTyping(destino);
          await delay(4000); // Esperando 4 seg
          client.sendText(destino, 'O seu investimento será de:\n\n' +
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
                                        '```Convênios/irmãos: R$ 129,00.```👦👦');
          client.stopTyping(destino);
          break;
        case '5':
          // client.sendMessageOptions(destino, 'Qual Unidade vc deseja', {'1': 'Turu', '2': 'Calhau'});
          // pilha.push('5');
          break;
        case '6':
          var responsavel = '';
          var aluno = '';
          var descricao = '';

          client.startTyping(destino);
          await delay(1000); // Esperando 1 seg
          client.sendText(destino, 'Por favor, você poderia nos informar o _Nome Completo_ do *Responsável* pelo aluno?');
          responsavel = responsavel + mensagem;
          pilha.push('7');
          if (pilha[pilha.length - 1] == '7') {
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, 'Agora informe o _Nome Completo_ do *Aluno*:');
            aluno = aluno + mensagem;
            pilha.push('8');
            if (pilha[pilha.length - 1] == '8') {
              client.startTyping(destino);
              await delay(1000); // Esperando 1 seg
              client.sendText(destino, 'E por fim, _Descreva_ o que vc *Solicita*:');
              descricao = descricao + mensagem;
              pilha.pop();
              pilha.pop();
            }
          }
          client.startTyping(destino);
          await delay(3000); // Esperando 3 seg
          client.sendText(destino, 'O sr.(a) *' + responsavel + '* responsável pelo aluno *' + aluno + '*.\n' + 'Solicita: ' + descricao);
          client.startTyping(destino);
          await delay(2000); // Esperando 2 seg
          client.sendText(destino, 'Caso vc queira editar o *Responsável* digite *1*, *2* para o *Aluno* e *3* para a *Descrição*. Digite *OK* se nada precisa ser alterado.');
          client.stopTyping(destino);

          pilha.push('6');
          break;
        default:
          client.startTyping(destino);
          await delay(1000); // Esperando 1 seg
          client.sendText(destino, msgCNR);
          client.stopTyping(destino);
          break;
        }
    } else if (pilha.length == 2) {
      var indice = pilha.length - 1;
      if (pilha[indice] == '2') { // Menu das unidades
        switch (mensagem) {
          case 'MENU': // Volta ao Menu Principal
            client.startTyping(destino);
            await delay(4000); // Esperando 4 seg
            client.sendText(destino, menu);
            client.stopTyping(destino);
            pilha.pop();
            break;
          case '1': // Busca Informações sobre a Unidade na Africanas
            client.startTyping(destino);
            await delay(500); // Esperando 0.5 seg
            client.sendText(destino, 'A Unidade dos Africanos fica localizado📍:');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(destino, '-2.5535677754237622', '-44.274787231438225', 'Unidade Africanos');
            client.startTyping(destino);
            await delay(3000); // Esperando 3 seg
            client.sendText(destino, 'Seu funcionando tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                          'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' +
                                          'Segue abaixo telefone para contato.');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(destino, '559885655655@c.us', 'Escola Fla Unidade Africanos');
            client.stopTyping(destino);
            break;
          case '2': // Busca Informações sobre a Unidade no Calhau
            client.startTyping(destino);
            await delay(500); // Esperando 0.5 seg
            client.sendText(destino, 'A Unidade do Calhau fica localizado📍:');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(destino, '-2.4834286584426195', '-44.241763309085215', 'Unidade Calhau');
            client.startTyping(destino);
            await delay(3000); // Esperando 3 seg
            client.sendText(destino, 'Seu funcionando por *ligação* ou *WhatsApp*:\n' + 
                                          'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' + 
                                          'Atendimento *Presencial*:\n' + 
                                          'Terças e Quintas das 8h às 12h e das 14h às 19h.\n' + 
                                          'Segue abaixo telefone para contato.');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(destino, '559887354933@c.us', 'Escola Fla Unidade Calhau');
            client.stopTyping(destino);
            break;
          case '3': // Busca Informações sobre a Unidade no Turu
            client.startTyping(destino);
            await delay(500); // Esperando 0.5 seg
            client.sendText(destino, 'A Unidade do Turu fica localizado📍:');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(destino, '-2.508317382720364', '-44.225884631501415', 'Unidade São Luís/Turu');
            client.startTyping(destino);
            await delay(3000); // Esperando 3 seg
            client.sendText(destino, 'Seu funcionamento tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                          'Segunda a Quinta das 8h às 12h e das 14h as 19h\n' + 
                                          'Sexta é das 8h às 12h e das 14h as 18h\n' + 
                                          'Segue abaixo telefone para contato.');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(destino, '559888265981@c.us', 'Escola Fla Unidade Turu');
            client.stopTyping(destino);
            break;
          default:
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgCNR);
            client.stopTyping(destino);
            break;
        }
      } else if (pilha[indice] == '3') { // Menu das unidades
        switch (mensagem) {
          case 'MENU': // Volta ao Menu Principal
            client.startTyping(destino);
            await delay(4000); // Esperando 4 seg
            client.sendText(destino, menu);
            client.stopTyping(destino);
            pilha.pop();
            break;
          case '1': // Busca Informações sobre a Unidade na Africanas
            client.startTyping(destino);
            await delay(4000); // Esperando 4 seg
            client.sendText(destino, 'Horários da Africanos📍:\n' +
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
                                          '```Sub 05 e 09 às 17:00h```');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgSub);
            client.stopTyping(destino);
            break;
          case '2': // Busca Informações sobre a Unidade no Calhau
            client.startTyping(destino);
            await delay(2000); // Esperando 2 seg
            client.sendText(destino, 'Horários do Calhau📍:\n' +
                                          '*Terça* e *Quinta*\n' +
                                          '_Tarde_ ⛅\n' +
                                          '```Sub 13 e 11 às 16:00h\n```' +
                                          '```Sub 09 e 07 às 17:00h\n```' +
                                          '```Sub 05 às 18:00h```');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgSub);
            client.stopTyping(destino);
            break;
          case '3': // Busca Informações sobre a Unidade no Turu
            client.startTyping(destino);
            await delay(5000); // Esperando 5 seg
            client.sendText(destino, 'Horários do Turu📍:\n' +
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
                                          '```Sub 09 às 18:00h```');
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgSub);
            client.stopTyping(destino);
            break;
          case 'SUB':
            client.startTyping(destino);
            await delay(4000); // Esperando 4 seg
            client.sendText(destino, 'As *Categorias* são dadas de acordo com a faixa etária do aluno.\n' +
                                          '```Sub 05 = 4 e 5 anos```\n'+
                                          '```Sub 07 = 6 e 7 anos```\n' +
                                          '```Sub 09 = 8 e 9 anos```\n' +
                                          '```Sub 11 = 10 e 11 anos```\n' +
                                          '```Sub 13 = 12 e 13 anos```\n' +
                                          '```Sub 15 = 14 e 15 anos```\n' +
                                          '```Sub 16 e 17 = 16, 17 e 18 anos.```');
            client.stopTyping(destino);
            break;
          default:
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgCNR);
            client.stopTyping(destino);
            break;
        }
      } else if (pilha[indice] == '6') {
        switch (mensagem) {
          case '1':
            break;
          case '2':
            break;
          case '3':
            break;
          case 'OK':
            break;
          default:
            client.startTyping(destino);
            await delay(1000); // Esperando 1 seg
            client.sendText(destino, msgCNR);
            client.stopTyping(destino);
            break;
        }
      }
    }
  });
}