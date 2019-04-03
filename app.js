const express = require("express");
const port = 3000;
const opn = require("opn");

// create app object
const app = express();

app.use(require("./routes"));

app.listen(port, () => {
  console.log(`API Live on Port ${port}.`);
  opn(`http://localhost:${port}/api/users`);
});
