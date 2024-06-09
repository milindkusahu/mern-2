const express = require("express");
const userRouter = require("./routes/users.routes");
const currenciesRouter = require("./routes/currencies.routes");

const app = express();
const PORT = 8082;

// app.get("/", (req, res) => {
//     res.header({"Content-Type": "text/html"})
//     .send("<h1>Currency Database</h1>");
// })

app.use("/users", userRouter);

app.use("/currencies", currenciesRouter);

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`);
});
