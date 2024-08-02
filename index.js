const http = require("node:http");
const fs = require("node:fs");
const server = http
  .createServer((req, res) => {
    const url = req.url;

    let filename = url == "/" ? "./index.html" : `.${url}.html`;

    if (
      filename !== "./about.html" &&
      filename !== "./contact-me.html" &&
      filename !== "./index.html"
    ) {
      filename = "./404.html";
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("Something wrong happened");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })

  .listen(8080);
