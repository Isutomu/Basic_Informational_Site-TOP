import http from "node:http";
import fs from "node:fs/promises";

const server = http.createServer(async function (req, res) {
  let file;

  switch (req.url) {
    case "/":
      file = "./index.html";
      break;
    case "/about":
      file = "./about.html";
      break;
    case "/contact-me":
      file = "./contact-me.html";
      break;
    default:
      file = "./404.html";
  }

  if ("404.html" in file) {
    res.writeHead(404, { "Content-Type": "text/html" });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
  }

  const data = await fs.readFile(file);
  res.write(data);
  res.end();
});

server.listen(8080);
