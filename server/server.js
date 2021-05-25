const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./routes/index");

app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
module.exports = app;
