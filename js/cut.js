// Splits a given file into smaller subfiles by line number
var infileName = './test/sw.txt';
var fileCount = 1;
var count = 0;
var fs = require('fs');
var outStream;
var outfileName = infileName + '.' + fileCount;
newWriteStream();
var inStream = fs.createReadStream(infileName);

var lineReader = require('readline').createInterface({
    input: inStream
});

function newWriteStream() {
    outfileName = infileName + '.' + fileCount;
    outStream = fs.createWriteStream(outfileName);
    count = 0;
}

lineReader.on('line', function(line) {
    count++;
    outStream.write(line + '\n');
    if (count >= 200) {
        fileCount++;
        console.log('file ', outfileName, count);
        outStream.end();
        newWriteStream();
    }
});

lineReader.on('close', function() {
    if (count > 0) {
        console.log('Final close:', outfileName, count);
    }
    inStream.close();
    outStream.end();
    console.log('Done');
});
console.log("cutted")