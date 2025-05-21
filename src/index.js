

function numeroAleatorio() {
    return new Promise((resolve, reject) => {
        const numero = Math.random();

        if (numero < 0.5) {
            resolve("❌ El numero es menor que 0.5  "  +  numero)
        }else {
            reject("✅ El numero  fue procesado con exito  " +  numero)
        }
    })
}

numeroAleatorio()
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.error(error);
})