var spaceOddity;

function setup() {
  loadJSON('http://faco.cl/data/ejemplojson', gotData,'jsonp');
  var miCanvas = createCanvas(windowWidth, 400);
  miCanvas.parent('miContenedor');
}

function gotData(data){
   console.log(data);//mandarlo a la consola-el dato de setup-
   spaceOddity = data;

}

function draw(){
  background(235);
  if(spaceOddity){ //si aparece spaceOddity ( o sea si esa variable tiene data), debe dibujar lo que se señala abajo
    rectMode(CORNER)
    for (var n = 0; n < spaceOddity.people.length; n++){ //
    text(spaceOddity.people[n].name+" ("+spaceOddity.people[n].craft+")", 10, 20*(n+1));
    }
  }
}
