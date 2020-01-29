const fs = require("fs");
const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const Axios = require("axios");
const FormData = require("form-data");

const cookieJar = new tough.CookieJar();
const axios = Axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  jar: cookieJar
});
axiosCookieJarSupport(axios);

setTimeout(async () => {
  await axios.get("/teste");
  await axios.get("/teste");
  await axios.get("/teste");
  let form = new FormData();
  form.append("stringField", "meu valor");
  form.append("theFile", fs.readFileSync("./Lenna_test_image.png")
    , {filename: 'bar.png', contentType: 'image/png'} // essa parte eh importante!
  );
  let headers = form.getHeaders();
  await axios.post("/upload", form, { headers: headers });
}, 1000);
