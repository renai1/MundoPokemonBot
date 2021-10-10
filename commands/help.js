const Discord = require("discord.js");

module.exports = {
 name: "help",
 description: "Respond with every command avaible!",
 callback(client,message){
   let embed = new Discord.MessageEmbed()
    .setTitle("Commands")
    .setDescription("Bot prefix: `,` \n\n**Owner** \n`WIP` \n**Moderation** \n`kick` \n**Utility** \n`purge`-`slowmode` \n**Posting** \n`WIP` \n**Roles** \n`WIP` \n**Fun** \n`nameme`-`kill`-`gayrate` \n**Information** \n`ping`-`botinfo`-`membercount`")
    .setColor("#d13f3f")
    .setFooter("MundoPokemon - Version 0.2");
 message.channel.send(embed);
 }
}