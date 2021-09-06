var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada y es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta numero 2" };
imprimirEtiqueta2(miEtiqueta2);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    console.log(area);
    return { area: area };
}
crearCuadrado({ ancho: 10 });
//let punto1: Punto = (x: 10, y: 20);
//punto1.x = 20;
function imprimir(estadoCivil) {
    console.log(estadoCivil);
}
imprimir('soltero');
function saludar4(fn) {
    fn("Hola mundo");
}
function imprimirEnConsola(s) {
    console.log(s);
}
saludar4(imprimirEnConsola);
