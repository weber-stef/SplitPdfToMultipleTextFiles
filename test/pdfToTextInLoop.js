//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');


//joining path of directory 
const directoryPath = path.join(__dirname, "../SinglePdfPages");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        let dataBuffer = fs.readFileSync(file);

        pdf(dataBuffer).then(function(data) {

            // number of pages
            console.log(data.numpages);
            // number of rendered pages
            console.log(data.numrender);
            // PDF info
            console.log(data.info);
            // PDF metadata
            console.log(data.metadata);
            // PDF.js version
            // check https://mozilla.github.io/pdf.js/getting_started/
            console.log(data.version);
            // PDF text
            console.log(data.text);

        });
    });
});