const Discord = require("discord.js");

module.exports = {
 name: "slowmode",
 description: "Activate slowmode in a channel!",
 callback(client,message){
 if (message.member.hasPermission("MANAGE_CHANNELS")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" "); 
 if(sentence != null){
 message.channel.setRateLimitPerUser(sentence);
 }

 message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
 } else {
 message.reply("You don't have perms to do that...")
 } 
 }
}