function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Cece"));
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
var MarcasDeAutos2;
(function (MarcasDeAutos2) {
    MarcasDeAutos2[MarcasDeAutos2["Toyota"] = 100] = "Toyota";
    MarcasDeAutos2[MarcasDeAutos2["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos2[MarcasDeAutos2["Ford"] = 102] = "Ford";
})(MarcasDeAutos2 || (MarcasDeAutos2 = {}));
var tacoma2 = MarcasDeAutos2.Toyota;
console.log(tacoma2);
function imprimirId(id) {
    console.log("El id es " + id);
}
imprimirId(1);
imprimirId('abc');
