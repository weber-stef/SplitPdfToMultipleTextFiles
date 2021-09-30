const { SSL_OP_NO_TLSv1_2 } = require('constants');

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log(filename + ' was read');
    console.log(data.length);
    for (i = 0; i < data.length; i++) {
        console.log(data[i]);
    }
});