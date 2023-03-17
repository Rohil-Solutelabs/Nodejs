const fs = require("node:fs");

// Read file module
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});

// Read file sync module: we can see that the file.txt is blocking the next content
// when we need this type of we can use the readfilesync module
const a = fs.readFileSync("file.txt");
console.log(a);
console.log(a.toString()); 

fs.writeFile("file2.txt", "This is data", () => {
  console.log("Written to the file");
});
console.log("Finished reading file");
