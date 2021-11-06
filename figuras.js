// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function alturaTrianguloIsoceles(lado1, lado2, base) {

    if (!(lado1 > 0 && lado2 > 0 && base > 0)) return null;

    if (lado1 !== lado2) return null;

    const mitadDeLaBase = base / 2;
    
    const altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow(mitadDeLaBase / 2, 2));

    return altura;
}

console.groupEnd();

// Código del círculo

console.group("Círculos");

const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);

    
    if (perimetro > 0) alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    if (area > 0) alert(area);
}

// Triángulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("InputTrianguloBase");
    const base = input3.value;
    
    const perimetro = perimetroTriangulo(lado1, lado2, base);

    
    if (perimetro > 0) alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTrianguloBase");
    const base = input1.value;

    const input2 = document.getElementById("InputTrianguloAltura");
    const altura = input2.value;
    
    const area = areaTriangulo(base, altura);
    if (area > 0) alert(area);
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const perimetro = perimetroCirculo(value);

    
    if (perimetro > 0) alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    
    const area = areaCirculo(value);
    if (area > 0) alert(area);
}

