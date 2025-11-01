//Script do Quiz
alert("Quiz sobre jogos!!")


const perguntas= [
 {
    pergunta:"Em qual console o jogo Mario Kart 8 Deluxe foi lançado?\n A) Xbox One\n B) Nintendo Switch\n C) PlayStation 4\n D) PC",
    resposta:"B",
    resposta:"b"
 },
 { 
    pergunta:"Qual dessas é uma franquia de jogos de terror?\n A) Resident Evil\n B) FIFA\n C) Forza Horizon\n D) Just Dance",
    resposta:"A",
    resposta:"a"
 },
 {
    pergunta:"Quem é o protagonista de God of War?\n A) Link\n B) Kratos\n C) Master Chief\n D) Scorpion",
    resposta:"B",
    resposta:"b"
 },
 {
    pergunta:"O que significa “FPS” no mundo dos games?\n A) Fast Power System\n B) First Player Setup\n C) First Person Shooter\n D) Full Pixel Screen",
    resposta:"C",
    resposta:"c"
 },
 {
    pergunta:"Em Minecraft, qual(s) são os items necessário para ir ao Nether?\n A) Diamante\n B) Obsidiana\n C) Isqueiro\n D) Todas as anteriores",
    resposta:"D",
    resposta:"d"
 },


];

//declarando a variavel de acertos que recebe 0
let acertos = 0;

// criar um laço de repetição para verificar as perguntas

for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);

    //verifica se o que o usuario digitou for minusculo e se não for converte para ser
    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`🎉Você aceretou ${acertos} de ${perguntas.length} perguntas🎉`)

//FUNÇÃO TROCAR COR
function trocar(cor){
  document.body.style.background=cor;  
}