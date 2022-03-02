//variaveis

var box;

function setup() {
  createCanvas(400,400); //criando a tela

  //criando o sprite
  box = createSprite(200,200,40,40);
  box.shapeColor = "purple"
}

function draw() {
  background("pink");

  if (keyDown("up")) {
    box.y = box.y -3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y + 3
  }
  if (keyDown('space')) {
    background("lightblue");
  }


  drawSprites();
}

