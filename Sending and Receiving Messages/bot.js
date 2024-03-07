const { Bot } = require("grammy");

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(" YOUR_BOT_TOKEN "); 


// receiving messages

bot.on('message', async (ctx) => {
    const messageText = ctx.message.text;
    console.log('Received Message:', messageText);
  });

// sending messages

// bot.on('message', async (ctx) => {
//     await ctx.reply('Hello! This is a message from your bot.');
//   });

// echo bot

// bot.on('message', async (ctx) => {
//     const messageText = ctx.message.text;
//     await ctx.reply(messageText); // Echoing back the received message
//   });

// sending markdown

// bot.on('message', async (ctx) => {
//     const message = 'This is a *bold* message in Markdown format with _italic_ and [URL](https://example.com).';
//     await ctx.reply(message.replace(/\./g, '\\.'), { parse_mode: "MarkdownV2" });
//   });

//sending HTML

// bot.on('message', async (ctx) => {
//     const message = 'This is a <b>bold</b> message in HTML format with <i>italic</i> and <a href="https://example.com">URL</a>.';
//     await ctx.reply(message, { parse_mode: "HTML" });
//   });




// Start the bot.
bot.start();