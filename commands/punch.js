const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require("snekfetch")
exports.run = async (client, message, args) => {
      if (message.mentions.users.size < 1) return message.channel.send("you can't punch nobody")
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a punch from** ${message.author.username} 👊`,{
                embed: {
                    image: {
                        url: "https://media2.giphy.com/media/7Nsu3HCWLRVgQ/source.gif"
                    }
                }
            })
}
module.exports.help = {
    name: "punch"
  }