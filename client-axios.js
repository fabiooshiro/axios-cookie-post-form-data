const axiosCookieJarSupport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
const Axios = require("axios");

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
}, 1000);
