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
var distMinDisparoResposta;
var perguntas = [];
var respostas = []; 
var indiceDesafio = 0;  
var imgsExplosao = [];
var animacaoExplosao = false; 
var xExplosao, yExplosao;   
var contImgExplosao = 0; 
var somExplosao; 


function preload() {
  imgNave = loadImage('imagens/ship_21.png');
  for (i=0; i<10; i++){
    imgsExplosao[i] = loadImage('imagens/bubble_explo'+(i+1)+'.png')
  }
  somExplosao =  loadSound('sons/big_explosion.ogg'); 
}

function obstaculo(xo, yo, valor ){
  fill(255);
  ellipse(xo,yo,30,30);
  fill(255,0,0);
  textSize(15);
  text(valor,xo-8,yo+7);
}

function reiniciaObstaculo(indice){
  vXo[indice] = random(width);
  vYo[indice] = - random(100,height);  
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

function venceuJogo() {
  background(0);
  textSize(30);
  fill(255); 
  noStroke(); 
  text("Acabou o Jogo!", 70, 100);
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

  text(perguntas[indiceDesafio], 70, 40);
  textSize(16); 
  text("Pontos: "+pontos, 400, 20); 
  text("Vidas: "+vidas, 400, 40); 
  text("Nível: "+indiceDesafio,400,60); 

  for ( i=0; i<quantidadeObst; i++){
    obstaculo(vXo[i],vYo[i],vValoresO[i]);
    vYo[i] = vYo[i] + vo;
    // Colisão Jogador com as respostas erradas 
    if ( dist(vXo[i],vYo[i],xJogador,yJogador) < distMinimaEntreNaveObst ) {
      for ( cont=0; cont<quantidadeObst; cont++){
        vYo[cont] = -random(100,500); 
      }
      vidas = vidas - 1;
      tela = 4; 
      xJogador = 250;
      yJogador = 400; 
    }
    // Colisão do disparo com respostas erradas 
    if ( disparoAtivo ){
      if ( dist(vXo[i],vYo[i],xDisparo,yDisparo) < distMinDisparoResposta ) {
        reiniciaObstaculo(i); 
        pontos = pontos + 1; 
        disparoAtivo = false; 
        animacaoExplosao = true; 
        xExplosao = xDisparo;
        yExplosao = yDisparo; 
        somExplosao.play(); 
      }
    }
    if ( vYo[i] > height ){
      reiniciaObstaculo(i) 
    }      
  }
  obstaculo(xr,yr,respostas[indiceDesafio]);
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
    pontos = pontos + 100; 
    indiceDesafio = indiceDesafio + 1; 
  }
  // Colisão da resposta com o disparo 
  if (disparoAtivo){
    if ( dist(xr,yr,xDisparo,yDisparo) < distMinDisparoResposta ){
      xr = random(width);
      yr = - random(100,height);
    }
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
    //somDisparo.play(); 
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
  // desenha explosão 
  if ( animacaoExplosao ){ 
    image(imgsExplosao[contImgExplosao], xExplosao, yExplosao); 
    contImgExplosao = contImgExplosao + 1; 
    if ( contImgExplosao > 9 ){ 
      contImgExplosao = 0; 
      animacaoExplosao = false; 
    }
  }
}

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  xr = random(width);
  yr = random(50,height);
  distMinDisparoResposta = 20; 

  for (i=0; i<quantidadeObst; i++){
    vXo[i] = random(width);
    vYo[i] = - random(100,height);
    valorO = parseInt( random(99) );
    while(valorO == respostas[0] ){
      valorO = random(99);
    }
    vValoresO[i] = valorO; 
  }
  xJogador = 250;
  yJogador = 400;
  vo = 5; 
  indiceDesafio = 0; 
  perguntas[0] = "8 + 5?"; 
  respostas[0] = 13; 
  perguntas[1] = "18 - 6?"; 
  respostas[1] = 12; 
  perguntas[2] = "7 * 5?"; 
  respostas[2] = 35; 
  perguntas[3] = "56 / 4?"; 
  respostas[3] = 14; 
  perguntas[4] = "3 + 2 * (5 + 1)";
  respostas[4] = 15; 
  perguntas[5] = "3 * 6 / 2";
  respostas[5] = 9; 

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
  if (tela == 4){
    venceuJogo();
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