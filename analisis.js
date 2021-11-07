const salariosCol = colombia.map(persona => persona.salary);

const salariosColSorted = salariosCol.sort((a, b) => a - b);

const medianaSalarial = obtenerMediana(salariosColSorted);


const spliceStart = parseInt((salariosColSorted.length * 90) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaSalarialTop10 = obtenerMediana(salariosColTop10);

console.log({
    medianaSalarial,
    medianaSalarialTop10
})