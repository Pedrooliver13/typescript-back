import express from "express";
import routes from "./routes";

const app = express();

app.use(routes);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(3333);
