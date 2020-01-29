const express = require("express");
const cookieParser = require("cookie-parser");
const port = 5000;

const app = express();
app.use(cookieParser());

let count = 0;
app.get("/*", (req, res) => {
  console.log(req.cookies)
  res.cookie("meuCookie", `meuValor ${count++}`);
  res.send("ok");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
