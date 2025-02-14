const express = require('express')
const app = express();
const path = require('path')
const {date_fields} = require('./generate-csv-process-data')
const {getListTramas2} = require('./functions/process-data')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
let data = []
app.get('/',async(req,res)=>{
    const columns = date_fields
    if(data.length===0){
        data = await getListTramas2('./date_20461665820_00009153_40001_0029878_202501_20250121.txt',columns)
    }
    res.render('pages/index',{data,columns})
})
app.listen(3000,()=>{
    console.log('server on port 3000')
})