const fs = require("fs");
const orgPath = '../SingleTextPages/';
const originalFileName = 'page-14.txt';
const titlePath = '../SingleTitledPages/';
let tn = 1;
fs.readFile(orgPath + originalFileName, (err, data) => {
    if (err) {
        throw err;
    }
    // Split the text after each \n and put the lines in an array 
    let fileRows = data.toString().split('\n');
    // take the first line (title of the song) and convert it to a lowercase variable
    let firstRow = fileRows[0].toLowerCase();
    // show the result
    let resultString = firstRow.trim();
    console.log(resultString);
    // replace the whitespaces with -
    let titleWithMinusesInName = resultString.replace(/\s/g, '-')
        // make safeCopy of file
    fs.copyFile(orgPath + originalFileName, orgPath + originalFileName + ".bak", callback);
    // show the result
    console.log(titleWithMinusesInName);
    const newName = titleWithMinusesInName + ".txt";
    console.log(newName);

    // Rename file
    function callback(err) {
        if (err) throw err;
        console.log('xx');
    }
    fs.rename(orgPath + originalFileName, orgPath + newName, function(err) {
        if (err) throw err
        console.log('Successfully renamed - AKA moved!')
    })
});