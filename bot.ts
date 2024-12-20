import { Telegraf } from 'telegraf';

const bot = new Telegraf('7605275484:AAHE9R0ffn1BigIbe9Isj0Umzr3L0zdy2u0');

bot.start((ctx) => {
  ctx.reply('Добро пожаловать!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Срочно голосовать',
            web_app: { url: 'https://awards-six.vercel.app/' },
          },
        ],
      ],
    },
  });
});

bot.launch();