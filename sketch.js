var xBtnMenu = 100;
var yBtn1Menu = 200; 
var yBtn2Menu = 300;
var larguraBtnMenu = 200; 
var alturaBtnMenu = 60; 
var bordaBtnMenu = 10; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(255);
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn1Menu && mouseY < yBtn1Menu + alturaBtnMenu ){
    fill(10)
  }
  rect(xBtnMenu,yBtn1Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
  
  fill(100,200,100);
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn2Menu && mouseY < yBtn2Menu + alturaBtnMenu ){
    fill(10)
  }
  rect(xBtnMenu,yBtn2Menu,larguraBtnMenu,alturaBtnMenu,bordaBtnMenu);
}


function mouseClicked() {
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn1Menu && mouseY < yBtn1Menu + alturaBtnMenu ){
    console.log("ciclou no botão branco!")
  }
  if ( mouseX > xBtnMenu && mouseX < xBtnMenu + larguraBtnMenu && mouseY > yBtn2Menu && mouseY < yBtn2Menu + alturaBtnMenu ){
    console.log("ciclou no botão verde!")
  }
}