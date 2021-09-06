function saludar(nombre){
    return "Hola, "+ nombre;
}

console.log(saludar("Cece"));

enum MarcasDeAutos {
    Toyota,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;

console.log(tacoma);

enum MarcasDeAutos2 {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma2: MarcasDeAutos2 = MarcasDeAutos2.Toyota;

console.log(tacoma2);


