const express = require("express");
const app = express();
const port = 3000;

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide age!");
  } else if (req.query.age < 18) {
    res.send("You are under Age, You can not access this page!");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome Page!");
});

app.get("/user", (req, res) => {
  res.send("Welcome to the user Page!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about Page!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
