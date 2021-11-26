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

function estaSobreBtn(yBtnMenu){
  return  mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtnMenu && mouseY < yBtnMenu + alturaBtnMenu;
}

function setup() {
  createCanvas(400, 400);
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
    text("Jogo em ação", 70, 100);
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