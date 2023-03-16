const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/redirect") {
    // --------------------------------------------- parsing request ----------------------------------------------
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      console.log(parsedBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "http://example.com");
    res.end();
  } else if (req.url == "/") {
    res.write("<html>");
    res.write("<head><title>Testing</title></head>");
    res.write(
      '<body><form action="/redirect" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found</h1><p>This page was not found on this server!</p>");
  }
});
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
