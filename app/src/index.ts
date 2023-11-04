import express = require("express");

const app = express();

app.get("/", (_, res) => res.send("Hello world!"));

const port = 4000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
