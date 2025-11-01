// Script geral

//FUNÇÃO TROCAR
function trocar(cor){
  document.body.style.background=cor;  
}

let imagens=[
  "src/assets/imagemSlideShow1.jpg",
  "src/assets/imagemSlideShow2.jpg",
  "src/assets/imagemSlideShow3.jpg",
  "src/assets/imagemSlideShow4.jpg",
  "src/assets/imagemSlideShow5.jpg",
];

//DECLARANDO AS VARIAVEIS

let i=0;
let tempo =5000; // milisegundos

//função 

function slideShow(){
    document.getElementById("image").src=imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout(slideShow,tempo)
}
slideShow();
