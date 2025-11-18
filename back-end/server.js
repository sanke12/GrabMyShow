const express = require("express");
const app = express(); // 👈 yeh () miss tha

const cors = require("cors");
const connectDB = require('./dbConnection');
const Ticket = require('./schema');

app.use(cors()); // 1️ Allow frontend to access backend (Cross-Origin Resource Sharing)

app.use(express.json()); // 2 Backend ko samajhne ke liye ki request body JSON format mein hai

connectDB(); // 3️ MongoDB ke sath connection establish kar raha hai

app.use("/api", require("./routes")); // 4 saare APIs ka main endpoint banaya (localhost:8080/api/... )

app.listen(8080, () => {
    console.log("App is listening"); // 5️ Server port 8080 pe run karega
});
