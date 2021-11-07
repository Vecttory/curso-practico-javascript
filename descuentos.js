function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;
    return precioConDescuento;
}

function calcularPrecioFinal() {
    const inputPrice = document.getElementById("InputPrice");
    const price = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discount = inputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(price, discount);

    const paragraph = document.getElementById("ResultPrice");
    paragraph.innerText = "El precio con descuento son: $ " + precioFinal.toFixed(2);
}

function calcularDescuentoConCupon(precio, cupon='') {
    const cupones = [
        { text: 'MEH5', discount: 5 },
        { text: '2OFF', discount: 20 },
        { text: 'LIQUIDACION', discount: 70 },
        { text: '99VIP', discount: 99 }
    ];

    const match = cupones.find(cp => cp.text.toLocaleLowerCase() === cupon.toLocaleLowerCase());

    if (!match) return false;

    return calcularPrecioConDescuento(precio, match.discount);
}

function calcularPrecioFinalConCupones() {
    const inputPrice = document.getElementById("InputPriceCoupons");
    const price = inputPrice.value;
    const inputCupon = document.getElementById("InputDiscountCoupons");
    const cupon = inputCupon.value;

    const precioFinal = calcularDescuentoConCupon(price, cupon);
    const paragraph = document.getElementById("ResultPriceCoupons");

    if (!precioFinal) {
        paragraph.innerText = "El cupón no es válido!";
    } else {
        paragraph.innerText = "El precio con descuento son: $ " + precioFinal.toFixed(2);
    }
}