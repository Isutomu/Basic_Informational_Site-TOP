import "dotenv/config";
import express from "express";
import fs from "node:fs/promises";

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/", async function (req, res) {
  const data = await fs.readFile("./index.html");
  res.write(data);
});
app.get("/about", async function (req, res) {
  const data = await fs.readFile("./about.html");
  res.write(data);
});
app.get("/contact-me", async function (req, res) {
  const data = await fs.readFile("./contact-me.html");
  res.write(data);
});
app.get("*", async function (req, res) {
  const data = await fs.readFile("./404.html");
  res.write(data);
});

app.listen(PORT, () => console.log(`Properly ported and running on ${PORT}`));
