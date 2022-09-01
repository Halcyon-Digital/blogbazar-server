const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8000;

connectDB();

// Use Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
});
