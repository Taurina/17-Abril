var data; //lo primero es crear una variable global, a la que se le asigna un contenido en preload(){}

function preload() {
   data = loadTable("https://raw.githubusercontent.com/profesorfaco/dgp602.data/gh-pages/data/acaparadores-de-premios-oscar.csv", "csv", "header");
   //Fuente: https://es.wikipedia.org/wiki/Anexo:Películas_con_más_premios_Óscar
   //
}

function setup() {
   for (var i = 0; i < data.getRowCount(); i++) {
      var year = data.get(i, 0);//coordenadas, donde i es x y la y será siempre 0
      var title = data.get(i, 1);
      var how_many = data.get(i, 2);
      var nominados =data.get (i, 3);
      print("En " + year + ", la película «" + title + "» ganó " + how_many + " premios Óscar de los "+ nominados +" a los que fue nominada.");
   }
   print("La tabla consultada tiene " + data.getRowCount() + " filas y " + data.getColumnCount() + " columnas.");
}

function draw() {}
