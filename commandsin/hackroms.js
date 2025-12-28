const Discord = require("discord.js");

exports.run = async (client, interaction, database, reply) => {

 return interaction.reply({embeds: [new Discord.EmbedBuilder()
.setAuthor({name: "GBA Hackroms", iconURL: "https://imgur.com/MjSi7V3.png"}) 
.setColor(Number(`0x00BFFF`))
.setDescription(`[Pokémon Emerald (pokémon follow you)](https://www.mediafire.com/file/fq1ghplv8ykttu8/PK+EMR+Multiplayer+Alpha+4.2.gba/file)`)
.setTimestamp()
.setFooter({text: interaction.guild.name})]}).catch(err => {
return console.error(err)
})

}