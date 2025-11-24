const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const TOKEN = "8503049488:AAG8LLvDP0e3_lCEv_JHGBctmqNNB3sbvOI";
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const app = express();
app.use(bodyParser.json());

// الردود العشوائية
const replies = ["❤️", "🥰"];

// مسار الويب هوك
app.post("/webhook", async (req, res) => {
    console.log("New update from Telegram:", req.body);

    if (req.body.message) {
        const chatId = req.body.message.chat.id;

        // اختيار رد عشوائي
        const reply = replies[Math.floor(Math.random() * replies.length)];

        // إرسال الرد
        await axios.post(TELEGRAM_API, {
            chat_id: chatId,
            text: reply
        });
    }

    res.sendStatus(200);
});

// صفحة الفحص
app.get("/", (req, res) => {
    res.send("Bot Webhook is running!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
