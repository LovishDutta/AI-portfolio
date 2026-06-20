const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({origin:"*"}));
app.use(express.json());

const chatRoutes = require("./routes/chat.routes");
app.use("/api/chat", chatRoutes);

module.exports = app;