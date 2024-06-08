const express = require("express");
const currenciesData = require("./currencies.json");
const app = express();
const PORT = 8082;

// app.get("/", (req, res) => {
//     res.header({"Content-Type": "text/html"})
//     .send("<h1>Currency Database</h1>"); 
// })

//Dynamic Route
app.get("/currencies/:symbol", (req, res) => {
    // console.log(req.params.symbol);

    const reqCurrency = currenciesData.data.find((currency) => currency.id.toLowerCase() === req.params.symbol.toLowerCase())
    
    if(reqCurrency === undefined)
       return res.status(404).send({ message: "Invalid Currency Symbol" });
    res.send(reqCurrency);
});

app.listen(PORT, () => {
    console.log(`server running on PORT:${PORT}`)
})