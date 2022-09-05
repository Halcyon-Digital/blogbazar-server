const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 8000;

connectDB();

// Use Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(routes);

// Get all Media
app.use("/files", express.static("./public/images"));

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
