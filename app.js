require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3000;
const cors = require("cors");
const knightRoutes = require("./routes/main");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("./public"));
app.use("/api/v1/validPositions", knightRoutes);
app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port} ......`);
});
