import { URL } from "url";
import hbs from "hbs";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
const app = express();

const port = process.env.PORT;

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Bruno`s web page",
    name: "Bruno Frontini",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    title: "Bruno`s web page",
    name: "Bruno Frontini",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    title: "Bruno`s web page",
    name: "Bruno Frontini",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
