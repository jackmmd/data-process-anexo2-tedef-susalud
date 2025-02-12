const { readTrama } = require('./read-trama')
const {createFile} = require('./create-file')

async function getListTramas(path_file_trama,fields) {
    const trama_list = await readTrama(path_file_trama)
    let data_csv = ""
    fields.map(field=>{
        data_csv += `${field.number_field}|`  
    })    
    data_csv += "\n"
    fields.map(field=>{
        data_csv += `${field.field}|`  
    })
    data_csv += "\n"
    trama_list.map((row_trama) => {
        fields.map((field) => {
            const field_value = row_trama.slice(field.initial_position - 1, (field.initial_position - 1) + field.length)
            data_csv += `${field_value.replace('.',',')}|`
        })
        data_csv += "\n"
    })
    createFile(`procesado-${path_file_trama.slice(2,6)}.csv`,data_csv)
}
module.exports = { getListTramas }
