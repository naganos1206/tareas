//ejemplo6
function impid2(id2) {
    if (typeof id2 === "string") {
        console.log("El id2 es " + id2.toUpperCase());
    }
    else {
        console.log("El id2 es " + id2.toFixed(2));
    }
}
impid2('Este_es_mi_id');
impid2(1206.100);
