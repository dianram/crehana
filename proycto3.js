const iva = 0.19; 

let productos = {};

let subtotal = 0;

let totaIva = 0;

let total = 0;

function agregarProducto(nombre, precio, descuento){
    if (descuento){


    }else{


    }
    let ivaProduct = calcularIva(precio);
    let descuento = 0;
}

function calcularIva(precio){
let ivaProducto = precio * (iva/100);
totalIva = totalIva + ivaProducto
return ivaProducto;
}

function calcularDescuento(descuento, precio){
    let descuento;
    switch (descuento){
    case 1:
        descuento = precio - (precio + 0.10)
        break;
    case 2:
        descuento = precio - (precio * 0.5)
        break;
    default:
        descuento = precio - (precio * 0.03)
        break;


    }
return descuento;
}