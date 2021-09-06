var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 0] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 1] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 2] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
