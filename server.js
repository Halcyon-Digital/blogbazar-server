const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const app = express();
const routes = require("./routes");
const { errorHandler, notFoundHandler } = require("./middleware/error");

const PORT = process.env.PORT || 8000;

connectDB();

// Use Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

// Get all Media
app.use("/files", express.static("./public/images"));

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
