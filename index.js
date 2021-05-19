// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

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

const menu = 'Selecione uma das opções abaixo:\n' + 
                '*1* - Unidades📍\n' +
                '*2* - Horários das Categorias⌚\n' +
                '*3* - Mensalidades💰\n' + 
                '*4* - Marcar Aula Experimental⚽\n' + 
                '*5* - Já sou Aluno🔍\n' + 
                '*6* - Sobre a Escolinha📜\n' +
                'Vc pode acessa esse menu a qualquer momento digitando: *MENU*';

// ========================================= Unidades =========================================
const menuUnidades = 'Para conhecer melhor, selecione uma das *Unidades* abaixo:\n' + 
                      '*1* - Africanas📍\n' + '*2* - Calhau📍\n' + "*3* - Turu📍\n" +
                      '*MENU* - _Para voltar ao Menu Principal_';

function start(client) {

  client.onMessage((message) => {
    var mensagem = String(message.body).toUpperCase();

    if (pilha.length == 0) {
      client.sendText(message.from, msgSaudacao + menu);
      pilha.push('0');
    } else if (pilha.length == 1) {
      switch(mensagem){
        case 'MENU':
          client.sendText(message.from, menu);
          break;
        case '1':
          client.sendText(message.from, menuUnidades);
          pilha.push('1');
          break;
        case '2':
          // pilha.push('2');
          break;
        case '3':
          // pilha.push('3');
          break;
        case '4':
          // pilha.push('4');
          break;
        case '5':
          // pilha.push('5');
          break;
        case '6':
          // pilha.push('6');
          break;
        default:
          client.sendText(message.from, msgCNR);
          break;
      }
    } else if (pilha.length == 2) {
      if (pilha[pilha.length - 1] == '1') { // Menu das Unidades
        if (mensagem == 'MENU') { // Volta ao Menu Principal
          client.sendText(message.from, menu);
          pilha = [];
        } else if (mensagem == '1') { // Busca Informações sobre a Unidade na Africanas
          client.sendText(message.from, 'A Unidade da Africanas fica localizado📍:');
          client.sendLocation(message.from, '-2.5535677754237622', '-44.274787231438225', 'Unidade Africanas');
          client.sendText(message.from, 'Seu funcionando tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                        'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' +
                                        'Segue abaixo telefone para contato.');
          client.sendContactVcard(message.from, '559885655655@c.us', 'Escola Fla Unidade Africanas');
        } else if (mensagem == '2') { // Busca Informações sobre a Unidade no Calhau
          client.sendText(message.from, 'A Unidade do Calhau fica localizado📍:');
          client.sendLocation(message.from, '-2.4834286584426195', '-44.241763309085215', 'Unidade Calhau');
          client.sendText(message.from, 'Seu funcionando por *ligação* ou *WhatsApp*:\n' + 
                                        'Segunda a Sexta das 8h às 12h e das 14h às 18h.\n' + 
                                        'Atendimento *Presencial*:\n' + 
                                        'Terças e Quintas das 8h às 12h e das 14h às 19h.\n' + 
                                        'Segue abaixo telefone para contato.');
          client.sendContactVcard(message.from, '559887354933@c.us', 'Escola Fla Unidade Calhau');
        } else if (mensagem == '3') { // Busca Informações sobre a Unidade no Turu
          client.sendText(message.from, 'A Unidade do Turu fica localizado📍:');
          client.sendLocation(message.from, '-2.508317382720364', '-44.225884631501415', 'Unidade São Luís/Turu');
          client.sendText(message.from, 'Seu funcionamento tanto *presencial* quanto por *ligação* ou *WhatsApp*:\n' +
                                        'Segunda a Quinta das 8h às 12h e das 14h as 19h\n' + 
                                        'Sexta é das 8h às 12h e das 14h as 18h\n' + 
                                        'Segue abaixo telefone para contato.');
          client.sendContactVcard(message.from, '559888265981@c.us', 'Escola Fla Unidade Turu');
        } else {
          client.sendText(message.from, msgCNR);
        }
      } else if (pilha[pilha.length -1] == '6') { // Informações da Escola do Flamengo
        client.sendText(message.from, 'E ai, curtiu as nossas unidades?\n' +
                                      'Isso foi pq você nem sabe que somos uma das maiores redes de franquia de futebol do país🇧🇷.' + 
                                      'Temos mais de 1.000 unidades espalhadas por todo o Brasil🌎.');
        client.sendVideo(message.from, '/video', 'introFla.mp4', '');
        client.sendText(message.from, 'Somos ligadas diretamente com o Clube de Regatas do Flamengo🔴⚫,' +
                                      ' os nossos alunos  participam de competições oficiais como, Copa Fla Local🏅, Copa Fla Nordeste🏆 e Copa Fla Brasil🇧🇷.' +
                                      'O nosso principal objetivo é ensinar noções do futebol para meninos👦 e meninas👧 com idades de 04 a 18 anos.\n' +
                                      ' Apesar de não termos como objetivo a formação profissional dos nossos alunos,' +
                                      ' a Escola Flamengo disponibiliza ferramentas que ajudam eles nesse sonho.' +
                                      ' Scout, Mundialitos e as competições oficial🤝 além de indicação direta ao Club são uma dessas ferramentas.\n' +
                                      'Ah! _E todos os nossos alunos tem por direito um seguro contra acidente que já está incluído nas mensalidades_.' +
                                      ' Esse seguro cobre despesas médicas👨‍⚕️ em caso de contusão dentro do campo em aula ou jogos que estejam jogando pela escola!\n' +
                                      '\nE tem muitoooos outros benefícios de ser um aluno Flamengo.\n' + 
                                      'Veja a Unidade📍 mais próxima e agende sua aula experimental. 😉✌️\n\n' + 
                                      'Faz teu nome jogador(a)!! ⚽');
        client.sendText(message.from, 'Digite *MENU* para voltar ao Menu Principal.');
        if (mensagem == 'MENU') { // Volta ao Menu Principal
          client.sendText(message.from, menu);
          pilha = [];
        } else {
          client.sendText(message.from, msgCNR);
        }
      }
    }
  });
}