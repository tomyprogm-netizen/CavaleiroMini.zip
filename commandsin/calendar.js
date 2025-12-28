const Discord = require('discord.js');

exports.run = async (client, interaction, database, reply) => {
  
const date = new Date() 
date.setHours(date.getHours() - 3)

var week = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"]

return await interaction.reply({embeds: [new Discord.EmbedBuilder()
.setTitle("🗓️" + ` | Calendário ${client.user.username}!`)
.setColor(Number(date.getHours() < 6 || date.getHours() >= 18? "0x191970" : date.getHours() > 12? "0xff4500" : "0xffe87c"))
.setDescription(`**__Ano__**: ${date.getFullYear()} 
**__Mês__**: ${month[date.getMonth()]} 
**__Dia__**: ${date.getDate()} (${week[date.getDay()]})
**__Horário__**: ${date.getHours()}h, ${date.getMinutes()}m, ${date.getSeconds()}s`)], fetchReply: true}).catch(err => {
return console.error(err)
})
  

}