const express = require("express");
const request = require("request");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/comunas", (req, res) => {
  const url = "https://api.boostr.cl/geography/communes.json";
  request(
    { url, headers: { "User-Agent": "request" } },
    (error, response, body) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.send(body);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
