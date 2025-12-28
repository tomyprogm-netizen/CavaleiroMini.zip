const Discord = require("discord.js");

exports.run = async (client, interaction, database, reply) => {
  return interaction.reply({embeds: [new Discord.EmbedBuilder()
.setAuthor({name: "| Emuladores GBA", iconURL: "https://imgur.com/MjSi7V3.png"})                      
.setColor(Number(`0x00BFFF`))
.setDescription(`[Pc](https://www.mediafire.com/file/pbhtqdrlxd9i5c6/VisualBoyAdvance_2.0_%28EmersonLinoGames%29%282%29.zip/file?ssl=1)
[Mobile](https://www.mediafire.com/file/oqeaaxcwq8cnxq9/MyBoy%21GBA_V1.8.0_%28EmersonLinoGames%29.apk/file?ssl=1)`)
.setTimestamp()
.setFooter({text: interaction.guild.name})]}).catch(err => {
return console.error(err)
})
  
}