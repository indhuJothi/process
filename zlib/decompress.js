const zlib = require ('zlib')

const unzip = zlib.createUnzip()
const fs = require('fs')

const input = fs.createReadStream('C:/Users/Indhu/Desktop/test.gz')
const output = fs.createWriteStream('C:/Users/Indhu/Desktop/test2.txt')

input.pipe(unzip).pipe(output)