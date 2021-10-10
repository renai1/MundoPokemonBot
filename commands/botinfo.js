const Discord = require("discord.js");

module.exports = {
 name: "botinfo",
 description: "Responds with info about the bot!",
 callback(client,message){
 let embed = new Discord.MessageEmbed()
  .setTitle("Bot Info")
  .setColor("RANDOM")
  .setDescription("Info: MundoPokemon")
  .addField(`Bot made by Renai#2909
 and ◤Trͥoyͣaͫvirus◢#7960`,`------------------`)
  .addField(`⏱| **${client.ws.ping}ms** Latency.`,`------------------`)
  .addField(`Help command: ,help`,`------------------`)
  .addField(`Bot prefix: ,`,`------------------`)
  .addField(`Requested by ${message.author.username}`,`------------------`)
  .setFooter("MundoPokemon - Version 0.2")
  .setTimestamp()
  message.channel.send(embed)
 }
}