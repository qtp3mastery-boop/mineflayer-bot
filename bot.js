const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'NexalithSMP.aternos.me',
  port: 25565,
  username: 'BotName'
})

bot.on('spawn', () => {
  console.log('Bot joined!')
})
