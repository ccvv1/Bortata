import express from "express";

const app = express();
app.use(express.json());

// متغيّر لتبديل الردود
let toggle = true;

app.post("/webhook", (req, res) => {
    console.log("Received:", req.body);

    // التبديل بين ❤️ و 🥰
    const reply = toggle ? "❤️" : "🥰";

    // تغيير الحالة للمرة القادمة
    toggle = !toggle;

    console.log("Auto reply:", reply);

    res.status(200).send("OK");
});

app.get("/", (req, res) => {
    res.send("Bot is running!");
});

app.listen(3000, () => console.log("Bot started on port 3000"));
