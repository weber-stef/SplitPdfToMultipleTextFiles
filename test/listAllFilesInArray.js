//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, "../SingleTextPages");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
        fs.copyFile(file, file + '.bak', (err) => {
            if (err) throw err;
            console.log(file + 'was copied to destination.txt');
        });
    });
});