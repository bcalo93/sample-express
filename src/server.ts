import express from "express";
const app = express();
const port = 8080;

export default () => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};