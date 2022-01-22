//Código do Carro

let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2.7, 3.2, 4.5, 5, 2.8, 3.5];
let comprimentoCarro = 50
let alturaCarro = 35

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){

  image(imagemCarros[i] , xCarros[i] , yCarros[i] , comprimentoCarro, alturaCarro);
 }
}

function movimentaCarro(){
 for (let i = 0; i < imagemCarros.length; i++){  
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialdoCarro(){
 for (let i = 0; i < imagemCarros.length; i++){  
  if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
  }
 }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}



