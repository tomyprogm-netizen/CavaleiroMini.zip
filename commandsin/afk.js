const Discord = require("discord.js");

exports.run = async (client, interaction, database, reply) => {
database.ref(`servidores/afk/${interaction.user.id}`).once('value').then( async (db) => {

if(db.val() != null && db.val().afk && db.val().afk === true) return interaction.reply({content: `**${interaction.user.tag}, Seu modo afk já está ativado no bot!**`}).catch(err => {
return console.error(err)
})

else{
database.ref(`servidores/afk/${interaction.user.id}`).set({
afk: true,
reason: !interaction.options.getString("razão")? ("Não Informado") : interaction.options.getString("razão")
})

 return await interaction.reply({embeds: [new Discord.EmbedBuilder()
.setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({extension: "png", size: 2048, dynamic: true})})
.setColor(Number("0xDC143C"))
.setDescription(`**Módulo AFK foi ativado ${interaction.user.tag}.**`)]}).catch(err => {
return console.error(err)
})

}
})//db
}