const router = require("express").Router();

const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("../controllers/currency.controllers");

router.get("/", getCurrencies);

router.get("/:symbol", getCurrencyBySymbol);

module.exports = router;
