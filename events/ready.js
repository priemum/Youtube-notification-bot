const { prefix } = require('../index')
const client = require('../index')

client.on('ready', async () => {
  client.user.setStatus('online');
  console.log(`${client.user.username} ✅ is Online`)
  client.user.setActivity(`${prefix}help`)

})