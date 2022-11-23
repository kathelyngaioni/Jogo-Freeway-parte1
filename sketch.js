let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//Carro com posição inicial fora da tela
let xCarro1 = 600;

//Ator
let yAtor= 366;

function preload(){
  imagemDaEstrada = loadImage("imgs/estrada.png");
  imagemDoAtor = loadImage("imgs/ator-1.png")
  imagemCarro = loadImage("imgs/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro1();
  movimentaCarro1();
  movimentaAtor();
}
function mostraAtor(){
  image(imagemDoAtor,100,yAtor,30,30);
}
function mostraCarro1() {
  image(imagemCarro,xCarro1,40,50,40);
}

function movimentaCarro1(){
  xCarro1 -= 2;
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}