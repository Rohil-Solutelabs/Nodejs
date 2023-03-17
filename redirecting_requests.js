const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/redirect") {
    res.statusCode = 302;
    res.setHeader("Location", "http://example.com");
    res.end();
  } else if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World!</h1><p>Nice to see you!</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1><p>This page was not found on this server!</p>");
  }
});

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
