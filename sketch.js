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
var quantidadeObst = 3; 
var vValoresO = []; 
var vidas = 5; 
var pontos = 0; 
var distMinimaEntreNaveObst = 50; 
var disparoAtivo = false; 
var xDisparo, yDisparo; 

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

function instrucoes(){
  background(0);
  textSize(30);
  fill(255); 
  noStroke(); 
  text("Instruções", 70, 100);
  desenhaBntVoltar(); 
}

function creditos(){
  background(0);
  textSize(30);
  fill(255); 
  noStroke(); 
  text("Créditos", 70, 100);
  desenhaBntVoltar(); 
}

function fase1(){
  background(0);
  textSize(30);
  fill(255); 
  noStroke(); 

  text("8 + 5?", 70, 40);
  textSize(16); 
  text("Pontos: "+pontos, 400, 20); 
  text("Vidas: "+vidas, 400, 40); 

  for ( i=0; i<quantidadeObst; i++){
    obstaculo(vXo[i],vYo[i],vValoresO[i]);
    vYo[i] = vYo[i] + vo;
    if ( dist(vXo[i],vYo[i],xJogador,yJogador) < distMinimaEntreNaveObst ) {
      for ( cont=0; cont<quantidadeObst; cont++){
        vYo[cont] = -random(100,500); 
      }
      vidas = vidas - 1;
      tela = 4; 
      xJogador = 250;
      yJogador = 400; 
    }
    if ( vYo[i] > 500 ){
      vXo[i] = random(400);
      vYo[i] = - random(100,400);
    }      
  }

  obstaculo(xr,yr,numeroR);
  yr = yr + vo;
  if ( yr > height ){
    xr = random(width);
    yr = - random(100,height);
  } 
  // Colisão da resposta com a nave 
  if ( dist(xr,yr,xJogador,yJogador) < distMinimaEntreNaveObst ){
    console.log("Colidiu!");
    xr = random(width);
    yr = - random(100,height);
    pontos = pontos + 10; 
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
  if (keyIsDown(CONTROL) && ! disparoAtivo ) {
    disparoAtivo = true; 
    xDisparo = xJogador;
    yDisparo = yJogador; 
  }
  // desenha a nave 
  imageMode(CENTER); 
  image(imgNave,xJogador, yJogador);
  // desenha disparo 
  if ( disparoAtivo ){
    fill(255); 
    ellipse(xDisparo,yDisparo,5,5); 
    yDisparo = yDisparo - 7; 
    if (yDisparo < 0){
      disparoAtivo = false; 
    }
  }
}

function setup() {
  createCanvas(500, 500);
  xr = random(width);
  yr = random(50,height);

  for (i=0; i<quantidadeObst; i++){
    vXo[i] = random(width);
    vYo[i] = - random(100,height);
    valorO = parseInt( random(99) );
    while(valorO == numeroR ){
      valorO = random(99);
    }
    vValoresO[i] = valorO; 
  }
  xJogador = 250;
  yJogador = 400;
  vo = 4; 
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
    fase1(); 
  }
  if (tela == 2){
    instrucoes(); 
  }
  if (tela == 3){
    creditos(); 
  }
  // Tela de espera 
  // Para quando o jogador perder uma vida 
  if ( tela == 4 ){
    background(100,0,0);
    textSize(30);
    fill(255); 
    noStroke(); 
    text("Você perdeu uma vida!", 50, 100);    
    textSize(26);
    text("Digite ENTER para continuar!", 50, 200);   
    if ( keyIsDown(ENTER) ){
      tela = 1; 
    } 
  }
}


function mouseClicked() {
  if ( tela == 0 ){
    if ( estaSobreBtn(yBtn1Menu) ){
      console.log("clicou no botão 1!")
      tela = 1; 
    }
    else if (estaSobreBtn(yBtn2Menu) ){
      console.log("clicou no botão 2!");
      tela = 2; 
    }
    else if ( estaSobreBtn(yBtn3Menu) ){
      console.log("clicou no botão rosa!");
      tela = 3; 
    }
  }
  else if ( tela == 2 || tela == 3){
    if ( estaSobreBtnVoltar() ){
      tela = 0; 
    }
  }
}