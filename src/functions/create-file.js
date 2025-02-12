const fs = require('fs')
function createFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      console.log("Ocurrió un error")
    } else {
      console.log("Archivo creado correctamente")
    }
  })
}

module.exports = {createFile}