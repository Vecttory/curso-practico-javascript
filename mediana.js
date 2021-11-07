function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function obtenerMediana(lista=[]) {
    lista = lista.sort((a, b) => a - b);
    const mitad = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        mediana = (lista[mitad] + lista[mitad - 1]) / 2;

    } else {
        mediana = lista[mitad];
    }

    return mediana;
}