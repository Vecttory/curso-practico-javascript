const lista1 = [1, 5, 3, 3 ,2 ,2, 5 ,5  ,43 , 3, 3 ,1  ,1 , 1, 6,6, 6, 5, 4, 4, 6, 6, 2, 2, 3, 3, 3, 3];

function calcularModa(numeros) {

    const lista1Count = {};

    numeros.forEach(num => {
        if (lista1Count[num]) {
            lista1Count[num] += 1;
        } else {
            lista1Count[num] = 1;
        }
    })
    
    const lista1Array = Object.entries(lista1Count).sort((a, b) => b[1] - a[1]);

    const moda = lista1Array[0];

    return moda;
}