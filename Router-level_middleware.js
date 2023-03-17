const express = require("express");
const reqFilter = require("./middleware");
const route = express.Router();
const app = express();

const port = 3000;

// app.use(reqFilter);

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome Page!");
});

app.get("/user", (req, res) => {
  res.send("Welcome to the user Page!");
});

app.get("/product", reqFilter, (req, res) => {
  res.send("Welcome to the user Page!");
});

// group middleware apply ---------------------------------

route.get("/about", (req, res) => {
  res.send("Welcome to the about Page!");
});

route.get("/contact", (req, res) => {
  res.send("Welcome to the Contact us Page!");
});

app.use("/", route);

// ---------------------------------------------------

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
