const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'NexalithSMP.aternos.me',
  port: 15621,
  username: 'BotName'
})

bot.on('spawn', () => {
  console.log('Bot joined!')
})
