const { Bot } = require('grammy');
const {InlineKeyboard , Keyboard} = require("grammy");

const bot = new Bot('YOUR_BOT_TOKEN');


// Command handler for /start command
bot.command('start', async (ctx) => {

    const keyboard= new Keyboard()
    .text("/inline")
    .text("/Check").row()
    .text("/Status")
    .text("/Ask")
    .resized();

  await ctx.reply('Welcome! This is the start command handler.', {
    // Send keyboard with message.
     
    reply_markup: keyboard,
  
  });
});





// Command handler for /inline command
bot.command('inline', async (ctx) => {

  // Construct a keyboard.
const inlineKeyboard = new InlineKeyboard().text("click", "click-payload");
    await ctx.reply("Curious? Click me!", { reply_markup: inlineKeyboard });
});

// Wait for click events with specific callback data.
bot.callbackQuery("click-payload", async (ctx) => {
      ctx.reply( "You were curious, indeed!")
})


bot.start();
