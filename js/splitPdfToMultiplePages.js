const doc = await PDFNet.PDFDoc.createFromURL(filename);
const page_num = await doc.getPageCount();
for (let i = 1; i <= page_num; ++i) {
    const newDoc = await PDFNet.PDFDoc.create();
    newDoc.insertPages(0, inDoc, i, i, PDFNet.PDFDoc.InsertFlag.e_none);
    const buf = await newDoc.saveMemoryBuffer(PDFNet.SDFDoc.SaveOptions.e_linearized);

    //optionally save the blob to a file or upload to a server
    const blob = new Blob([buf], { type: 'application/pdf' });
}