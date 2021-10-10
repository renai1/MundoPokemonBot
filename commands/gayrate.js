const Discord = require("discord.js");

module.exports = {
 name: "gayrate",
 description: "Responds with a gay rate?!",
 callback(client,message){
 let victim = message.mentions.users.first()
 let rand = Math.round(Math.random() * 110 + 1);
 if (!victim) console.log("")

 else {
 let embed = new Discord.MessageEmbed()
 .setTitle(`GAYRATE`)
 .setDescription(`${victim} is ${rand}% GAY! :rainbow_flag:`)
 .setColor("#BFFF00")
 .setFooter("100% Cierto 😳")
 message.channel.send(embed)
 }
 }
}