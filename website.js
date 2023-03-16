const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  console.log(req.url); 
  
  if (req.url == "/hello") {
    res.statusCode = 200;
    res.end("<h1>This is Rohil</h1><p>This is the way to rock the world!</p>");
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1> About Rohil</h1><p>This is the way to About Rohil!</p>");
  } else if (req.url == "/") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString()); 
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1><p>This page was not found on this server!</p>");
  }
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
