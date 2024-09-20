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

  const data = await fs.readFile(file);
  res.write(data);
  res.end();
});

server.listen(8080);
