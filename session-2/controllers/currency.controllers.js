const currenciesData = require("./currencies.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value)
    return res.send(
      currenciesData.data.filter(({ min_size }) => min_size === min_value)
    );
  res.send(currenciesData.data);
};

const getCurrencyBySymbol = (req, res) => {
  // console.log(req.params.symbol);
  // console.log(req.query);
  const { symbol } = req.params;
  const reqCurrency = currenciesData.data.find(
    ({ id }) => id.toLowerCase() === symbol.toLowerCase()
  );

  if (reqCurrency === undefined)
    return res.status(404).send({ message: "Invalid Currency Symbol" });
  res.send(reqCurrency);
};

module.exports = { getCurrencies, getCurrencyBySymbol };
