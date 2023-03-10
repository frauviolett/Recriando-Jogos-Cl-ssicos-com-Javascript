//Ator

let xAtor= 85;
let yAtor= 366;
let colisao= false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
    yAtor +=3;
      
    }
  }
  
}
 
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15) 
    
    if(colisao){
      voltaAtor(); 
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
        
        } 
      }
    }
  } 

function voltaAtor(){
  yAtor = 366;
  
}


function incluirPontos(){
  textAlign(CENTER);
  fill(255,240,60);
  textSize(25);
  text(meusPontos, width / 5, 28);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();   
   
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
  
}

function podeSeMover(){
  return yAtor < 366;
}



