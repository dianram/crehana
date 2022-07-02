function tablasFor(numero){
    console.log (`Tabla ${numero}`)
    for (let i = 1; i <= 10; i ++){
        console.log (`${numero} * ${i} = ${numero * i}`)
    }
}

function tablasWhile(numero, veces){
    console.log(`Tabla ${numero}`);
    let acumulador = 1;
    while(acumulador <= veces){
    console.log(`${numero} = ${acumulador} = ${numero * acumulador}`);
    acumulador++
    }

}