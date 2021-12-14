const files = ['text.docx', 'index.html', 'document.pdf', 'script.js', 'style.css', 'summary.pdf', 'Harry_Potter.pdf', 'report.pdf'];
const pdfFiles = [];

for (let i = 0; i < files.length; i++) {
    let newFileArr = files[i].split('.');
    let extensionFile = newFileArr[newFileArr.length - 1];
    // console.log(extensionFile);

    if (extensionFile === 'pdf') {
        pdfFiles.push(files[i]);
    }
}
console.log(pdfFiles);

let someNewPdf = files.filter(element => ['pdf'].includes(element.split('.').pop()));

console.log(someNewPdf)
