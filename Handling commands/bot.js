const { Bot } = require('grammy');

const bot = new Bot('YOUR_BOT_TOKEN');

// Command handler for /start command
bot.command('start', async (ctx) => {
  await ctx.reply('Welcome! This is the start command handler.');
});

// Command handler for /help command
bot.command('help', async (ctx) => {
  await ctx.reply('You requested help. Here are some available commands:\n\n/start - Start the bot\n/help - Display help information\n/about - Information about the bot\n');
});

// Command handler for /about command
bot.command('about', async (ctx) => {
  await ctx.reply(`This bot is created using the Grammy framework.`);
});

bot.start();
