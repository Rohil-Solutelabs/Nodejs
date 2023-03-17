const path = require("node:path");

const a1 = path.basename("C:\\temp\\myfile.html"); // myfile.html
console.log(a1);

const a2 = path.dirname("C:\\temp\\myfile.html"); // C:\temp
console.log(a2);

const a3 = path.extname(__filename); // .js
console.log(a3);
console.log(__filename);
