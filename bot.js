const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
console.log("ready")
client.user.setGame("five Store", "https://twitch.tv/FiveStore")
  })
client.login(process.env.BOT_TOKEN);
