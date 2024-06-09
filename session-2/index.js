const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currency.controllers");
const {
  getUsers,
  searchUsers,
  getUserById,
} = require("./controllers/users.controllers");
const app = express();
const PORT = 8082;

// app.get("/", (req, res) => {
//     res.header({"Content-Type": "text/html"})
//     .send("<h1>Currency Database</h1>");
// })

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

app.get("/users", getUsers);

app.get("/users/search", searchUsers);

app.get("/users/:uuid", getUserById);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
