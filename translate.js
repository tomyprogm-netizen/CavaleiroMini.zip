const Discord = require("discord.js");
const translate = require('translate-google');

exports.run = async (client, interaction, database, reply) => {
 var lang = interaction.options.getString('língua')
 var langarray = ["pt", "en", "es", "ru"]

if(!langarray.includes(lang)) return interaction.reply({content: `**Línguas aceitas**: pt, en, es, ru`, ephemeral: true}).catch(err => {
return console.error(err)
})

else if(!interaction.options.getString('língua padrão')){
translate(interaction.options.getString('texto'), {to: interaction.options.getString('língua')}).then(res => {    
return interaction.reply({content: `**${lang === "en"? "🇺🇸 | English" : lang === "pt"? "🇧🇷 | Português" : lang === "es"? "🇪🇸 | Español" : "🇷🇺 | Русский"}**`,embeds: [new Discord.EmbedBuilder()
.setColor(Number(`0x${lang === "en"? "FF0000" : lang === "pt"? "FF000" : lang === "es"? "FA614E" : "778FFF"}`))
.setDescription(res)
.setFooter({text: "traduzido com ajuda do google tradutor."})], allowedMentions: {repliedUser: false}})
}).catch(err => {
  console.log(err)
    return interaction.reply({content: `**Erro**: verifique se as siglas das línguas realmente existem!`, ephemeral: true}).catch(err2 => {
    return console.error(err2)
    })
})
}

else{
translate(interaction.options.getString('texto'), {from: interaction.options.getString('língua padrão'), to: interaction.options.getString('língua')}).then(res => {    
return interaction.reply({content: `**${lang === "en"? "🇺🇸 | English" : lang === "pt"? "🇧🇷 | Português" : lang === "es"? "🇪🇸 | Español" : "🇷🇺 | Русский"}**`,embeds: [new Discord.EmbedBuilder()
.setColor(Number(`0x${lang === "en"? "FF0000" : lang === "pt"? "FF000" : lang === "es"? "FA614E" : "778FFF"}`))
.setDescription(res)
.setFooter({text: "traduzido com ajuda do google tradutor."})], allowedMentions: {repliedUser: false}})
}).catch(err => {
  console.log(err)
    return interaction.reply({content: `**Erro**: verifique se as siglas das línguas realmente existem!`, ephemeral: true})
})
  
}
}
