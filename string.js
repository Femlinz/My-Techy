const herName = "Esther"

console.log(herName.toUpperCase())
console.log(herName.toLowerCase())

const trimExample = "  Hello world!  "
console.log(trimExample.trim());
console.log(trimExample.trimStart());
console.log(trimExample.trimEnd());

let filename = "report_final_2024.pdf";

console.log(filename.startsWith("report"));
console.log(filename.startsWith("draft"));
console.log(filename.endsWith("pdf"));
console.log(filename.endsWith("docx"));

const extractExample = "Esther"
console.log(extractExample.slice(0, 3));     
console.log(extractExample.slice(3));   
console.log(extractExample.slice(-3));
console.log(extractExample.substring(0, 3));
console.log(extractExample.substring(3));
console.log(extractExample.substring(-3));
