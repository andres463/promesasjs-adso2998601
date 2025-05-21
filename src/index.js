// Funcion para simular la descarga de un archivo, utilizando promesas

function promesa2(){
   const error = false;
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("❌ Ocurrió un error al descargar")
      } else {
        resolve("✅ Promesa exitosa en 8 segundos")
      }
    }, 8000) 
  })
}


promesa2()
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.error(error);
})