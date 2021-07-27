//zlib module provides the compression functionality 

const zlib = require('zlib')

const zip = zlib.createGzip();
const fs = require('fs');
const { error } = require('console');

const input = fs.createReadStream('C:/Users/Indhu/Desktop/test.txt')
const output = fs.createWriteStream('C:/Users/Indhu/Desktop/test.gz')
