// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5; 

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetro = ladoCuadrado * 4;

console.log("El perímetro del cuadrado es: " + ladoCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: " + areaCuadrado + " cm2");

console.groupEnd();

// Código del triangulo

console.group("Triangulos");

const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const alturaTriangulo = 5.5;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo
    + " cm, "
);

console.log("La altura del triangulo mide: " + alturaTriangulo + " cm ");

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;

console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm ");

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;

console.log("El area del triángulo es de: " + areaTriangulo + " cm2");

console.groupEnd();

// Código del círculo

console.group("Círculos");

// Radio

const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + " cm ");

// Diámetro

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del círculo es: " + diametroCirculo + " cm ");

// PI

const PI = Math.PI;

console.log("PI es: " + PI);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del circulo es: " + perimetroCirculo + " cm ");

// Area

const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log("El area del circulo es: " + areaCirculo + " cm2 ");

console.groupEnd();