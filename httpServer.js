const { Console } = require("console");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is Rohil</h1><p>This is the way to rock the world!</p>");
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
