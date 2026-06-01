const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'YOUR_SERVER_IP',
  port: 25565,
  username: 'BotName'
})

bot.on('spawn', () => {
  console.log('Bot joined!')
})
