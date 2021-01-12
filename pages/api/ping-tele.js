// const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot(token, {polling: true});

export default function handler(req, res) {
  // bot.sendMessage(process.env.PM_TO_JIACHENG, "HELLO I FOUND YOU");
  // text: process.env.TELE_BOT,
  // text2: process.env.PM_TO_JIACHENG,
  res.status(200).json({
    'reply': 'this bot is working, replying from Vercel now...'
  })
}
