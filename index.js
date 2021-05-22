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
      client.startTyping(message.from);
      await delay(5000); // Esperando 5 seg
      client.sendText(message.from, msgSaudacao + menu);
      pilha.push('0');
      client.stopTyping(message.from);
    } else if (pilha.length == 1) {
      switch(mensagem){
        case 'MENU':
          client.startTyping(message.from);
          await delay(4000); // Esperando 4 seg
          client.sendText(message.from, menu);
          client.stopTyping(message.from);
          break;
        case '1':
          client.startTyping(message.from);
          await delay(1000); // Esperando 1 seg
          client.sendText(message.from, 'Deixa eu te apresentar a maior rede de franquia de futebol do país🇧🇷.' +
                                        ' Temos mais de 1.000 unidades espalhadas por todo o Brasil🌎.');
          client.startTyping(message.from);
          await delay(500); // Esperando 0.5 seg
          client.sendVideoAsGif(message.from, 'gif/introFla.mp4', 'introFla.gif', '');
          client.startTyping(message.from);
          await delay(7000); // Esperando 7 seg
          client.sendText(message.from, 'Somos ligadas diretamente com o Clube de Regatas do Flamengo🔴⚫,' +
                                        ' os nossos alunos  participam de competições oficiais como: Copa Fla Local🏅, Copa Fla Nordeste🏆 e Copa Fla Brasil🇧🇷.\n' +
                                        'O nosso principal objetivo é ensinar noções do futebol para meninos👦 e meninas👧 com idades de 04 a 18 anos.\n' +
                                        'Apesar de não termos como objetivo a formação profissional dos nossos alunos,' +
                                        ' a Escola Flamengo disponibiliza ferramentas que ajudam eles nesse sonho.' +
                                        ' Scout, Mundialitos e as competições oficial🤝 além de indicação direta ao Club são uma dessas ferramentas.');
          client.startTyping(message.from);
          await delay(1000); // Esperando 1 seg
          client.sendText(message.from, 'Ah! _E todos os nossos alunos tem por direito um seguro contra acidente que já está incluído nas mensalidades_.' +
                                        ' Esse seguro cobre despesas médicas👨‍⚕️ em caso de contusão dentro do campo em aula ou jogos que estejam jogando pela escola!');
          client.startTyping(message.from);
          await delay(1000); // Esperando 1 seg
          client.sendText(message.from, 'E tem muitoooos outros benefícios de ser um aluno Flamengo.\n' + 
                                        'Veja a Unidade📍 mais próxima e agende sua aula experimental. 😉✌️\n\n' + 
                                        'Faz teu nome jogador(a)!! ⚽');
          client.startTyping(message.from);
          await delay(500); // Esperando 0.5 seg
          client.sendText(message.from, 'Digite *MENU* para voltar ao Menu Principal.');
          client.stopTyping(message.from);
          break;
        case '2':
          client.startTyping(message.from);
          await delay(2000); // Esperando 2 seg
          client.sendText(message.from, menuUnidades);
          pilha.push('2');
          client.stopTyping(message.from);
          break;
        case '3':
          client.startTyping(message.from);
          await delay(2000); // Esperando 2 seg
          client.sendText(message.from, menuUnidades);
          pilha.push('3');
          client.stopTyping(message.from);
          break;
        case '4':
          client.startTyping(message.from);
          await delay(4000); // Esperando 4 seg
          client.sendText(message.from, 'O seu investimento será de:\n\n' +
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
          client.stopTyping(message.from);
          break;
        case '5':
          // pilha.push('5');
          break;
        case '6':
          break;
        default:
          client.startTyping(message.from);
          await delay(1000); // Esperando 1 seg
          client.sendText(message.from, msgCNR);
          client.stopTyping(message.from);
          break;
        }
    } else if (pilha.length == 2) {
      var indice = pilha.length - 1;
      if (pilha[indice] == '2') { // Menu das unidades
        switch (mensagem) {
          case 'MENU': // Volta ao Menu Principal
            client.startTyping(message.from);
            await delay(4000); // Esperando 4 seg
            client.sendText(message.from, menu);
            client.stopTyping(message.from);
            pilha.pop();
            break;
          case '1': // Busca Informações sobre a Unidade na Africanas
            client.startTyping(message.from);
            await delay(500); // Esperando 0.5 seg
            client.sendText(message.from, 'A Unidade dos Africanos fica localizado📍:');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(message.from, '-2.5535677754237622', '-44.274787231438225', 'Unidade Africanos');
            client.startTyping(message.from);
            await delay(3000); // Esperando 3 seg
            client.sendText(message.from, 'Seu funcionando tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                          'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' +
                                          'Segue abaixo telefone para contato.');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(message.from, '559885655655@c.us', 'Escola Fla Unidade Africanos');
            client.stopTyping(message.from);
            break;
          case '2': // Busca Informações sobre a Unidade no Calhau
            client.startTyping(message.from);
            await delay(500); // Esperando 0.5 seg
            client.sendText(message.from, 'A Unidade do Calhau fica localizado📍:');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(message.from, '-2.4834286584426195', '-44.241763309085215', 'Unidade Calhau');
            client.startTyping(message.from);
            await delay(3000); // Esperando 3 seg
            client.sendText(message.from, 'Seu funcionando por *ligação* ou *WhatsApp*:\n' + 
                                          'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' + 
                                          'Atendimento *Presencial*:\n' + 
                                          'Terças e Quintas das 8h às 12h e das 14h às 19h.\n' + 
                                          'Segue abaixo telefone para contato.');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(message.from, '559887354933@c.us', 'Escola Fla Unidade Calhau');
            client.stopTyping(message.from);
            break;
          case '3': // Busca Informações sobre a Unidade no Turu
            client.startTyping(message.from);
            await delay(500); // Esperando 0.5 seg
            client.sendText(message.from, 'A Unidade do Turu fica localizado📍:');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendLocation(message.from, '-2.508317382720364', '-44.225884631501415', 'Unidade São Luís/Turu');
            client.startTyping(message.from);
            await delay(3000); // Esperando 3 seg
            client.sendText(message.from, 'Seu funcionamento tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                          'Segunda a Quinta das 8h às 12h e das 14h as 19h\n' + 
                                          'Sexta é das 8h às 12h e das 14h as 18h\n' + 
                                          'Segue abaixo telefone para contato.');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendContactVcard(message.from, '559888265981@c.us', 'Escola Fla Unidade Turu');
            client.stopTyping(message.from);
            break;
          default:
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendText(message.from, msgCNR);
            client.stopTyping(message.from);
            break;
        }
      } else if (pilha[indice] == '3') { // Menu das unidades
        switch (mensagem) {
          case 'MENU': // Volta ao Menu Principal
            client.startTyping(message.from);
            await delay(4000); // Esperando 4 seg
            client.sendText(message.from, menu);
            client.stopTyping(message.from);
            pilha.pop();
            break;
          case '1': // Busca Informações sobre a Unidade na Africanas
            client.startTyping(message.from);
            await delay(4000); // Esperando 4 seg
            client.sendText(message.from, 'Horários da Africanos📍:\n' +
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
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendText(message.from, msgSub);
            client.stopTyping(message.from);
            break;
          case '2': // Busca Informações sobre a Unidade no Calhau
            client.startTyping(message.from);
            await delay(2000); // Esperando 2 seg
            client.sendText(message.from, 'Horários do Calhau📍:\n' +
                                          '*Terça* e *Quinta*\n' +
                                          '_Tarde_ ⛅\n' +
                                          '```Sub 13 e 11 às 16:00h\n```' +
                                          '```Sub 09 e 07 às 17:00h\n```' +
                                          '```Sub 05 às 18:00h```');
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendText(message.from, msgSub);
            client.stopTyping(message.from);
            break;
          case '3': // Busca Informações sobre a Unidade no Turu
            client.startTyping(message.from);
            await delay(5000); // Esperando 5 seg
            client.sendText(message.from, 'Horários do Turu📍:\n' +
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
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendText(message.from, msgSub);
            client.stopTyping(message.from);
            break;
          case 'SUB':
            client.startTyping(message.from);
            await delay(4000); // Esperando 4 seg
            client.sendText(message.from, 'As *Categorias* são dadas de acordo com a faixa etária do aluno.\n' +
                                          '```Sub 05 = 4 e 5 anos```\n'+
                                          '```Sub 07 = 6 e 7 anos```\n' +
                                          '```Sub 09 = 8 e 9 anos```\n' +
                                          '```Sub 11 = 10 e 11 anos```\n' +
                                          '```Sub 13 = 12 e 13 anos```\n' +
                                          '```Sub 15 = 14 e 15 anos```\n' +
                                          '```Sub 16 e 17 = 16, 17 e 18 anos.```');
            client.stopTyping(message.from);
            break;
          default:
            client.startTyping(message.from);
            await delay(1000); // Esperando 1 seg
            client.sendText(message.from, msgCNR);
            client.stopTyping(message.from);
            break;
        }
      }
    }
  });
}