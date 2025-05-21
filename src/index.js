
// Funcion para simular la descarga de un archivo, utilizando promesas

function nuevapromesa(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("◀  promesa retornada con éxito después de 8 segundos ")
        }, 8000)
    })
}




//Funcion con async


async function ejecutar(){
    try {
        console.log("⌛Retorno en proceso...")
        const respuesta = await nuevapromesa()
        console.log(respuesta)

    } catch (error) {
        console.error("❌ Error al retornar la promesa", error)

    }
}

ejecutar()