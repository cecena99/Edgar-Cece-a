//Funcion que no tiene punto final ya que dispara una excepcion
function error(mensaje: string): never {
    throw new Error(mensaje);
}
// esta funcion no tiene punto final ya que dispara un error 
function fallo(): never {
    return error("Reportar fallo");
}
// esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() : never {
    while(true){}
}

//declare function crear(o: object): void;

//crear({prop: 0 })
//crear(null);
//crear(undefined);
//crear([])

// false es un tipo primitivo, por lo cual se genera un error
//crear(false);

function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
    
}

imprimirId(1);
imprimirId('abc');

function imprimirId2(id: number | string) {
    if (typeof id === "string"){
        console.log(`El id es ${(id as string).toUpperCase()}`);
    } else {
        console.log(`El id es ${(id as number).toFixed()}`);
    }
    
    
}

imprimirId2('este_es_mi_id');
imprimirId2('100.234234123');

function  saludar3(nombre: string) {
    console.log(`Hola ${nombre}`);
    
}

saludar3("Juan")

function  elevarAlCuadrado(base: number): number {
    return base * base;
    
}

let numeroBase = 10; 
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);


