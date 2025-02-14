const fs = require('fs')
var es = require('event-stream');

var path = 'date_20461665820_00009153_0029878_20250121.txt'; 
var linesArray = []; 
let end_string = ""

var s = fs.createReadStream(path)
    .pipe(es.split())
    .pipe(es.mapSync(function(line) {
        s.pause(); 
        linesArray.push(line); 
        s.resume();
    }))
    .on('error', function(err) {
        console.log('Error:', err);
    })
    .on('end', function() {
        console.log(linesArray.length);

        linesArray.map(i=>{
            let line = ""
            i.split('').map((x,index)=>{
              line+=`${x}${index!==i.length-1?",":""}` 
            }) 
            line+="\n" 
            end_string += line
        })
    });