const Discord = require("discord.js")
const ms = require("parse-ms");

exports.run = async (client, interaction, database, reply) => {
  database.ref(`servidores/timers/dailytimer/${interaction.user.id}`).once('value').then( async (f) => {
   database.ref(`servidores/swordcoins/${interaction.user.id}`).once('value').then(async (db) => {
  
    const date = new Date() 
date.setHours(date.getHours() - 3)

  var valord = date.getMonth() + 1 === 8? 300 : 200
     
       let timeout = 86400000 ;
      let farm = f.val() != null? f.val().timer: f.val()
      
        if(farm !== null && timeout - (Date.now() - farm) > 0){
            let time = ms(timeout - (Date.now() - farm));
        
        const embed = new Discord.EmbedBuilder()
        .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({extension:"png", size: 2048, dynamic: true})})
        .setColor(Number(`0xdaa520`))
        .setDescription(`Você já pegou seu daily! Volte daqui a **${time.days}d, ${time.hours}h, ${time.minutes}m, ${time.seconds}s**`)
        
            return interaction.reply({embeds: [embed], allowedMentions: {repliedUser: false}}).catch(err => {
return console.error(err)
})
        }
  else{

if(db.val() === null) await database.ref(`servidores/swordcoins/${interaction.user.id}`).set({
swordcoin: valord,
swordiamond: 0,
swordmystic: 0,
swordemerald: 0
  })

if(db.val() != null) await database.ref(`servidores/swordcoins/${interaction.user.id}`).update({
swordcoin: db.val().swordcoin + valord,
  })

await database.ref(`servidores/timers/dailytimer/${interaction.user.id}`).update({
timer: Date.now()
})
    
return await interaction.reply({embeds: [new Discord.EmbedBuilder()
.setAuthor({name: `Daily!`, iconURL: `https://imgur.com/MfS58Q9.gif`})
.setThumbnail(`https://imgur.com/MfS58Q9.gif`)
.setColor(Number(`0xffd700`))
.setDescription(`**Você recebeu ${valord} swordcoins do daily ${interaction.user}!**`)
.setFooter({text: `| Swordcoins atuais: ${db.val() === null? valord : db.val().swordcoin + valord}`, iconURL:  "https://imgur.com/RHUhiLv.png"})]}).catch(err => {
return console.error(err)
})
  }
})})//dbs
}