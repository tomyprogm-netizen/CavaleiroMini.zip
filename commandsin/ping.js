const Discord = require('discord.js');

exports.run = async (client, interaction, database, reply) => {
  
await interaction.reply({content: 'ping?', fetchReply: true}).then(async (m) => {

  m.edit({content: `🏓 **| Pong!**`, embeds: [new Discord.EmbedBuilder()
.setColor(Number(m.createdTimestamp - interaction.createdTimestamp <= 100? "0x57F287" : m.createdTimestamp - interaction.createdTimestamp <= 400? "0xFEE75C" : "0xED4245"))
.setDescription(`Latência do Server: **${m.createdTimestamp - interaction.createdTimestamp}ms.**
Latência da API: **${Math.round(client.ws.ping)}ms**`)]})
}).catch(err => {
return console.error(err)
})
}