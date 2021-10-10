const Discord = require("discord.js");

module.exports = {
 name: "ping",
 description: "Responds with pong!",
 callback(client,message){
 message.channel.send("Pong!");
 }
}