
function calcularMediaAritmetica(lista=[]) {

    // for (let index = 0; index < lista.length; index++) {
    //     const element = lista[index];
    //     sumaLista += element;
    // }

    // lista.forEach(num => {
    //     sumaLista += num;
    // });

    let sumaLista = lista.reduce((valorAcumulado = 0, valorActual) => valorAcumulado + valorActual);


    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}