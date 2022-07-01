let iva = 0.19;

function calcularIva(precio){
    let ivaProducto = precio * iva;
    console.log(`èl IVA del producto es ${ivaProducto}`)
    precioFinal = precio - ivaProducto;

} 