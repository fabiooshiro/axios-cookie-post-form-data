const Request = require("request");
const j = Request.jar();
const request = Request.defaults({ jar: j });
let url = "http://localhost:5000/test";

request({ url: url, jar: j }, () => {
  request({ url: url, jar: j });
});
