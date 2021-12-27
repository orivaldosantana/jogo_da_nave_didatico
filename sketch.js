var xBtnMenu = 100;
var yBtn1Menu = 180; 
var yBtn2Menu = 250;
var yBtn3Menu = 320;
var larguraBtnMenu = 200; 
var alturaBtnMenu = 50; 
var bordaBtnMenu = 10; 
var tela = 0;
var larguraBordaMenu = 6; 
var corBtnMenu = 'rgb(0,0,200)';
var xr, yr;
var xo1, xo2, yo1, yo2;
var vo; // velocidade do obstáculo  
var numeroR = 13; 
var imgNave;
var xJogador, yJogador;   
var larguraVoltar = 80;
var alturaVoltar = 30;
var xBtnVoltar = 300; 
var ybtnVoltar = 350; 
var vXo = []; 
var vYo = []; 
var quantidadeObst = 5; 
var vValoresO = []; 

function preload() {
  imgNave = loadImage('imagens/ship_21.png');
}

function obstaculo(xo, yo, valor ){
  fill(255);
  ellipse(xo,yo,30,30);
  fill(255,0,0);
  textSize(15);
  text(valor,xo-8,yo+7);
}


function estaSobreBtn(yBtnMenu){
  return  mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtnMenu && mouseY < yBtnMenu + alturaBtnMenu;
}

function desenhaBntVoltar(){ 
  if ( estaSobreBtnVoltar () ){
    fill(255);
  } else {
    fill(100);
  }
  rect(xBtnVoltar,ybtnVoltar,larguraVoltar,alturaVoltar, 8);
  noStroke(); 
  textSize(20)
  fill(0);
  text("Voltar",xBtnVoltar+15,ybtnVoltar+22);
}

function estaSobreBtnVoltar(){

  return  mouseX > xBtnVoltar && mouseX < xBtnVoltar + larguraVoltar && mouseY > ybtnVoltar && mouseY < ybtnVoltar + alturaVoltar;
}


function setup() {
  createCanvas(400, 400);
  xr = random(400);
  yr = random(50,400);

  for (i=0; i<quantidadeObst; i++){
    vXo[i] = random(400);
    vYo[i] = - random(100,400);
    valorO = parseInt( random(99) );
    while(valorO == numeroR ){
      valorO = random(99);
    }
    vValoresO[i] = valorO; 
  }
  xJogador = 200;
  yJogador = 200;
  vo = 5; 
}

function draw() {
  if (tela == 0 ){ 
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 
    text("Espaço M", 120, 100);
    stroke(250,200,250);
    strokeWeight(0);
    fill(corBtnMenu);
    if ( estaSobreBtn(yBtn1Menu) ){
      strokeWeight(larguraBordaMenu);
    }
    rect(xBtnMenu,yBtn1Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
    fill(255);
    noStroke(); 
    text("Jogar",xBtnMenu+60,yBtn1Menu+35);

    stroke(250,200,250);
    strokeWeight(0);
    fill(corBtnMenu);
    if ( estaSobreBtn(yBtn2Menu) ){
      strokeWeight(larguraBordaMenu);
    }
    rect(xBtnMenu,yBtn2Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
    fill(255);
    noStroke(); 
    text("Instruções",xBtnMenu+30,yBtn2Menu+35);

    stroke(250,200,250);
    strokeWeight(0);
    fill(corBtnMenu);
    if ( estaSobreBtn(yBtn3Menu) ){
      strokeWeight(larguraBordaMenu);
    }
    rect(xBtnMenu,yBtn3Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
    fill(255);
    noStroke(); 
    text("Créditos",xBtnMenu+40,yBtn3Menu+35);
  }
  if (tela == 1){
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 


    

    text("8 + 5?", 70, 50);


    for ( i=0; i<quantidadeObst; i++){
      obstaculo(vXo[i],vYo[i],vValoresO[i]);
      vYo[i] = vYo[i] + vo; 
      if ( vYo[i] > 400 ){
        vXo[i] = random(400);
        vYo[i] = - random(100,400);
      }      
    }

    obstaculo(xr,yr,numeroR);
    yr = yr + vo;
    if ( yr > 400 ){
      xr = random(400);
      yr = - random(100,400);
    } 

     

    // movimenta a nave 
    if (keyIsDown(LEFT_ARROW)) {
      xJogador = xJogador - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      xJogador += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      yJogador -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yJogador += 5;
    }
    // desenha a nave 
    imageMode(CENTER); 
    image(imgNave,xJogador, yJogador);




  }
  if (tela == 2){
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 
    text("Instruções", 70, 100);


    desenhaBntVoltar(); 
  }
  if (tela == 3){
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 
    text("Créditos", 70, 100);

    desenhaBntVoltar(); 
  }

}


function mouseClicked() {
  if ( tela == 0 ){
    if ( estaSobreBtn(yBtn1Menu) ){
      console.log("clicou no botão 1!")
      tela = 1; 
    }
    if (estaSobreBtn(yBtn2Menu) ){
      console.log("clicou no botão 2!");
      tela = 2; 
    }
    if ( estaSobreBtn(yBtn3Menu) ){
      console.log("clicou no botão rosa!");
      tela = 3; 
    }
  }
  if ( tela == 2 || tela == 3){
    if ( estaSobreBtnVoltar() ){
      tela = 0; 
    }
  }
}