const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// هذا مهم جداً — تيليغرام يرسل POST هنا
app.post("/", (req, res) => {
    console.log("New update from Telegram:", req.body);
    res.sendStatus(200); // لازم يرجع 200 وإلا يعتبره Telegram error
});

// صفحة فحص فقط
app.get("/", (req, res) => {
    res.send("Bot Webhook is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
