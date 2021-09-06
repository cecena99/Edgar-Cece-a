//Funcion que no tiene punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
// esta funcion no tiene punto final ya que dispara un error 
function fallo() {
    return error("Reportar fallo");
}
// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
//declare function crear(o: object): void;
//crear({prop: 0 })
//crear(null);
//crear(undefined);
//crear([])
// false es un tipo primitivo, por lo cual se genera un error
//crear(false);
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed());
    }
}
imprimirId2('este_es_mi_id');
imprimirId2('100.234234123');
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Juan");
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
