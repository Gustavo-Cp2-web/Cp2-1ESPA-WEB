//Script do Quiz
lert("Quiz sobre jogos")


const perguntas= [
 {
    pergunta:"",
    resposta:""
 },
 {
    pergunta:"",
    resposta:""
 },
 {
    pergunta:"",
    resposta:""
 },

];

let acertos = 0;


for(let i=0; i<perguntas.length;i++){
    const respostaUsuario=prompt(perguntas[i].pergunta);

    if(respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++;
    }
}
document.getElementById("msg").innerHTML=(`Você aceretou ${acertos} de ${perguntas.length} perguntas`)


