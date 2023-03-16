const fs = require("node:fs");
// blocking execute (Synchronous)
// - line by line execution

const a = fs.readFileSync("file.txt", "utf8");
console.log(a);

console.log("This is a message for blocking");

console.log(
  "------------------------------------------------------------------------------------"
);
// non blocking execute (Asynchronous)
// - callbacks will fire
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This is a message for non blocking");
