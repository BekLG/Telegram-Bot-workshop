require("dotenv").config();
const { Bot } = require("grammy");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(process.env.Bot_Token);

// Command handler for /start command
bot.command('start', async (ctx) => {
    await ctx.reply('Hello '+ ctx.message.chat.first_name+', How can i help you today?');
});

// receiving messages

bot.on('message', async (ctx) => {
    const messageText = ctx.message.text;

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = messageText;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const escapedMessage = text.replace(/[.!*+?^${}()|[\]\\]/g, '\\$&');
    ctx.reply(escapedMessage, { parse_mode: "MarkdownV2" },);

});

bot.start();