const express = require("express");
const cookieParser = require("cookie-parser");
const port = 5000;

const app = express();
app.use(cookieParser());

let count = 0;
app.get("/*", (req, res) => {
  console.log(req.cookies);
  res.cookie("meuCookie", `meuValor ${count++}`);
  res.send("ok");
});

const formidable = require("formidable");
app.post("/*", (req, res) => {
  var form = new formidable.IncomingForm();
  console.log("cookies", req.cookies);
  form.parse(req, function(err, fields, files) {
    console.log("stringField", fields["stringField"]);
    console.log("files", Object.keys(files));
    console.log("files.theFile.path", files.theFile.path);
    res.send("ok");
  });

  return;
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
