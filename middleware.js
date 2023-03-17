const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age!");
  } else if (req.query.age < 18) {
    res.send("You can not access this page!");
  } else {
    next();
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("This is about page!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
