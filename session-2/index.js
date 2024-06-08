const express = require("express");
const { getCurrencies, getCurrencyBySymbol } = require("./controllers/currency.controllers")
const app = express();
const PORT = 8082;

// app.get("/", (req, res) => {
//     res.header({"Content-Type": "text/html"})
//     .send("<h1>Currency Database</h1>");
// })

app.get("/currencies", getCurrencies);

//Dynamic Route
app.get("/currencies/:symbol", getCurrencyBySymbol);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
