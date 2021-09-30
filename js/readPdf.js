var fs = require("fs");
// https://github.com/modesty/pdf2json
var PDFParser = require("pdf2json");
var pdfParser = new PDFParser("ab.pdf", 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log(pdfParser)
    fs.writeFile("./content.txt", pdfParser.getRawTextContent());
});