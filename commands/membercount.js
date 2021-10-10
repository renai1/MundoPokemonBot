const Discord = require("discord.js");

module.exports = {
 name: "membercount",
 description: "Responds with information if members count!",
 callback(client,message){
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Member Count of ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .setTitle("Members")
 .setDescription (`Total: ${message.guild.members.cache.size}\n Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size}\nBots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`Requested by ${message.author.username}`)

 message.channel.send(embed);
 }
}