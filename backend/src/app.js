const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const chatRoutes = require("./routes/chat.routes");
app.use("/api/chat", chatRoutes);

const healthRoutes = require("./routes/health.routes");
app.use("/api/health", healthRoutes);

module.exports = app;