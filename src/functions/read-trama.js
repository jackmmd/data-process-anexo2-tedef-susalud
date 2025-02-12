const fs = require('fs')
var es = require('event-stream');

var path = 'date_20461665820_00009153_0029878_20250121.txt';

async function readTrama(path) {
  return new Promise((resolve, reject) => {
    let linesArray = [];

    let s = fs.createReadStream(path)
      .pipe(es.split())
      .pipe(es.mapSync(function (line) {
        s.pause();
        linesArray.push(line);
        s.resume();
      }))
      .on('error', function (err) {
        reject(err);
      })
      .on('end', function () {
        resolve(linesArray);
      });
  });
}
module.exports = { readTrama }