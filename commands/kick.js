module.exports = {
 name: "kick",
 description: "Kick Someone from the server!",
 callback(client,message){
 if(message.member.hasPermission("KICK_MEMBERS")) {
      let member = message.mentions.members.first()
      if(!member) message.channel.send("Please mention someone")
      else {
        member.kick().then(mem => {
          message.channel.send(`Kicked ${mem.user.username}`)
        })
      }
    } else {
      message.reply("You don't have permission to do that");
    }
 }
}