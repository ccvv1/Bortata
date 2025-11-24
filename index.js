const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// مسار الويب هوك الحقيقي
app.post("/webhook", (req, res) => {
    console.log("New update from Telegram:", req.body);

    // إرسال رد 200 لتجنب مشاكل تليغرام
    res.sendStatus(200);
});

// صفحة GET للفحص فقط
app.get("/", (req, res) => {
    res.send("Bot Webhook is running!");
});

// تشغيل السيرفر
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server running on port " + port);
});
