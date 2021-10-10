const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hola mundo!")
})
app.listen(3000, () => {
  console.log("Bot activado")
})

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ","; //This will be the default prefix. Feel free to change it.

const fs = require("fs"); //Make sure you add the package.

client.on("ready", () => {
  client.setMaxListeners(0)
  client.user.setUsername("MundoPokemon")
  client.user.setPresence({ activity: { name: ",help" }, status: "online" })
});

client.commands = new Discord.Collection(); //This is very important so do not forget it!
const files = fs.readdirSync("./commands/").filter(file => file.endsWith(".js")); //Make sure you add the folder called "commands"
for (const file of files) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on("message", message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd);
  command.callback(client, message, args, Discord);
});

client.login(process.env.token)