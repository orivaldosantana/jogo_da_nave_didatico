var xBtnMenu = 100;
var yBtn1Menu = 180; 
var yBtn2Menu = 250;
var yBtn3Menu = 320;
var larguraBtnMenu = 200; 
var alturaBtnMenu = 50; 
var bordaBtnMenu = 10; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill(255);
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn1Menu && mouseY < yBtn1Menu + alturaBtnMenu ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn1Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

  strokeWeight(1);
  fill(200,250,200);
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn2Menu && mouseY < yBtn2Menu + alturaBtnMenu ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn2Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

  strokeWeight(1);
  fill('#FF00FF');
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn3Menu && mouseY < yBtn3Menu + alturaBtnMenu ){
    strokeWeight(3);
  }
  rect(xBtnMenu,yBtn3Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);

}


function mouseClicked() {
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn1Menu && mouseY < yBtn1Menu + alturaBtnMenu ){
    console.log("ciclou no botão branco!")
  }
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn2Menu && mouseY < yBtn2Menu + alturaBtnMenu ){
    console.log("ciclou no botão verde!")
  }
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn3Menu && mouseY < yBtn3Menu + alturaBtnMenu ){
    console.log("ciclou no botão azul!")
  }
}