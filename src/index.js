// Funcion para simular la descarga de un archivo, utilizando promesas

function nuevapromesa(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("◀ promesa retornada con éxito después de 8 segundos...")
        }, 5000)
    })
}

console.log(nuevapromesa()
  .then((resultado) => {
    console.log(resultado)
  })
)
