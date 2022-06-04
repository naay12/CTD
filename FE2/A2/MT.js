/*Programaremos um pequeno jogo de Pedra, Papel ou Tesoura. Neste jogo o usuário poderá escolher entre uma das três opções e o computador escolherá aleatoriamente uma das três opções, essas opções serão então comparadas e no final será mostrado quem ganhou e quem perdeu a disputa. Para fazer essa atividade é importante lembrar das regras básicas deste jogo:

1 Pedra ganha de Tesoura.
2 Tesoura ganha de Papel.
3 Papel ganha de Pedra.
*/

//1 Implementar uma regra de que só é declarado como ganhador, quem ganhou 2 rodadas, para auxiliar use uma variável para armazenar o vencedor de cada rodada;

//2Empate no jogo, não dá pontuação para nenhum dos jogadores.

//3 Tente utilizar funções e a estrutura de decisão switch em seu código;
// 4Comente o código e utilize qualquer outro recurso para deixá-lo melhor formatado

//usar math para gerar números aleatórios
// exemplo parseInt(Math.random()*3+1)


// 1-obter qual a escolha do usuário

// 2-gerar um número aleatório entre 1 e 3
 
// 3-calcular os resultados

// [1]pedra -[2]-papel -[3]-tesoura


var escolhaScript=Math.floor(Math.random() * 3) + 1 ;

let btnInicio = document.querySelector("#inicio");
let btnRestart = document.querySelector("#restart");

//console.log(escolhaUsuario);
//console.log(escolhaScript);

let pontuacaoMaquina = 0;
let pontuacaoUsuario = 0;

function jogo(escolhaUsuario) {
    if (escolhaUsuario > escolhaScript) {
      alert('vc ganhou');
        pontuacaoUsuario++;
    } else if (escolhaUsuario < escolhaScript){
      alert('vc perdeu');
        pontuacaoMaquina++;
    } else {
      alert('empate');
    }
    if (pontuacaoMaquina == 3 || pontuacaoUsuario == 3){
        alert('fim de jogo');
    }
}
  
  function restart(escolhaUsuario){
      jogo(escolhaUsuario);
  }

btnInicio.addEventListener("click", function(){
    var  escolhaUsuario= Number (prompt("Escolha uma opção: \n 1-pedra \n 2-papel \n 3-tesoura"));
    if(escolhaUsuario >3){
        alert('escolha invalida');
    } else{
    jogo(escolhaUsuario);}
})

btnRestart.addEventListener("click", function(){
    var  escolhaUsuario= Number (prompt("Escolha uma opção: \n 1-pedra \n 2-papel \n 3-tesoura"));
    restart(escolhaUsuario);
})

// permitir usuario jogar novamente
// armazenar pontos e se um dos usários chegar a 3 pontos, o jogo acaba
// limitar quantidade de números de escolhas

