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
var numeroR = 13; 
var imgNave;
var xJogador, yJogador;   

function preload() {
  imgNave = loadImage('imagens/ship_21.png');
}

function obstaculo(xo, yo, valor ){
  fill(255);
  ellipse(xo,yo,50,50);
  fill(255,0,0);
  text(valor,xo-15,yo+10);
}


function estaSobreBtn(yBtnMenu){
  return  mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtnMenu && mouseY < yBtnMenu + alturaBtnMenu;
}

function setup() {
  createCanvas(400, 400);
  xr = random(400);
  yr = random(50,400);
  xJogador = 200;
  yJogador = 200;
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
    text("Jogar",xBtnMenu+60,yBtn1Menu+35);

    strokeWeight(0);
    fill(corBtnMenu);
    if ( estaSobreBtn(yBtn2Menu) ){
      strokeWeight(larguraBordaMenu);
    }
    rect(xBtnMenu,yBtn2Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

    strokeWeight(0);
    fill(corBtnMenu);
    if ( estaSobreBtn(yBtn3Menu) ){
      strokeWeight(larguraBordaMenu);
    }
    rect(xBtnMenu,yBtn3Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
  }
  if (tela == 1){
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 


    

    text("8 + 5?", 70, 50);

    obstaculo(230,140,"14"); 

    obstaculo(130,340,"11");
   
    obstaculo(xr,yr,numeroR);

     

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
  }
  if (tela == 3){
    background(0);
    textSize(30);
    fill(255); 
    noStroke(); 
    text("Créditos", 70, 100);
  }

}


function mouseClicked() {
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