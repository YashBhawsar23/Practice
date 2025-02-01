const { connectMongoDb } = require("config");
require("dotenv").config();
const express = require("express");

const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);

// Connection
connectMongoDb(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
