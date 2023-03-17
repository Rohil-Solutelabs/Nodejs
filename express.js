const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.get("/about", (req, res) => {
//   res.send("This is about page!");
// });

// app.use((req, res, next) => {
//   console.log("In the middleware");
//   next();
// });

app.use("/", (req, res, next) => {
  console.log("In the another middleware");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
