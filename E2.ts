const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s){
console.log(s.toUpperCase());
});

nombres.forEach((s) =>{
    console.log(s.toUpperCase());
} );



type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto){
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada y es : ${punto.y}`);
}


imprimirCoordenada({x: 10, y: 25});

function imprimirEtiqueta(etiqueta: {label: string}) {
    console.log(etiqueta.label);
}

let miEtiqueta = { numero: 10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

interface Etiqueta {
    label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
    
}

let miEtiqueta2 = { numero: 10, label: "Esta es mi etiqueta numero 2"};

imprimirEtiqueta2(miEtiqueta2);

interface Cuadrado {
    Color?: string;
    ancho: number;
}

function crearCuadrado(cuadrado: Cuadrado): {area: number} {
    const area = cuadrado.ancho * cuadrado.ancho;
    console.log(area);
    return { area: area};
    
    
}
crearCuadrado({ ancho: 10});

interface Punto2 {
    readonly x: number;
    readonly y: number;
}

//let punto1: Punto = (x: 10, y: 20);
//punto1.x = 20;

function imprimir(estadoCivil: 'soltero' | 'casado'){
    console.log(estadoCivil);
}
 imprimir('soltero');



 function saludar4(fn: (a:string) => void){
     fn("Hola mundo")
 }

 function imprimirEnConsola(s: string) {
     console.log(s);
 }

 saludar4(imprimirEnConsola);