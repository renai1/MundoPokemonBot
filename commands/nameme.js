module.exports = {
 name: "nameme",
 description: "Responds with a name!",
 callback(client,message){
   let nicknames = ["pedaso de aborto", "eres mierda", "quien eres?", "princesa", "hermos@"]
   
 message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new name!`);
 }
}