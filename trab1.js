function saludar(nombre) {
    return "Hola, " + nombre;
}
console.log(saludar("Pito Perez"));
//ejemplo2
var futbolista;
futbolista = ['Pïto Perez', 20];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//ejemplo3
var MarcasDeAuto;
(function (MarcasDeAuto) {
    MarcasDeAuto[MarcasDeAuto["Toyota"] = 100] = "Toyota";
    MarcasDeAuto[MarcasDeAuto["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAuto[MarcasDeAuto["Ford"] = 102] = "Ford";
})(MarcasDeAuto || (MarcasDeAuto = {}));
var tacoma = MarcasDeAuto.Toyota;
console.log(tacoma);
