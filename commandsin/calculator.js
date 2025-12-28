const math = require('mathjs');
const Discord = require('discord.js');

exports.run = async (client, interaction, database, reply, lang) => {

    const expression = interaction.options.getString("expressão").replaceAll("x", "*").replaceAll("÷", "/").replaceAll("π", Math.PI).replaceAll("e", Math.E).replaceAll("√", Math.sqrt).replaceAll("^", "**")
    try {
      const result = math.evaluate(expression);
     return await interaction.reply({content: `O resultado é: **${result}**`}).catch(err => {return console.error(err)});
    } catch (error) {
    return interaction.reply({content: 'Expressão inválida!'}).catch(err => {return console.error(err)});
    }
  } 
