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
                      '*0* - _Para voltar_';

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
        } else if (mensagem == '0') { // Volta para o Menu Anterior
          pilha.pop();
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
      }
    }
  });
}