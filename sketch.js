var xBtnMenu = 100;
var yBtn1Menu = 180; 
var yBtn2Menu = 250;
var yBtn3Menu = 320;
var larguraBtnMenu = 200; 
var alturaBtnMenu = 50; 
var bordaBtnMenu = 10; 

function estaSobreBtn(yBtnMenu){
  return  mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtnMenu && mouseY < yBtnMenu + alturaBtnMenu;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill(255);
  if ( estaSobreBtn(yBtn1Menu) ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn1Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

  strokeWeight(1);
  fill(200,250,200);
  if ( estaSobreBtn(yBtn2Menu) ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn2Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

  strokeWeight(1);
  fill('#FF00FF');
  if ( estaSobreBtn(yBtn3Menu) ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn3Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
}


function mouseClicked() {
  if ( estaSobreBtn(yBtn1Menu) ){
    console.log("clicou no botão branco!")
  }
  if (estaSobreBtn(yBtn2Menu) ){
    console.log("clicou no botão verde!")
  }
  if ( estaSobreBtn(yBtn3Menu) ){
    console.log("clicou no botão rosa!")
  }
}