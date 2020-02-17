const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](https://discord.gg/mdCzGnE)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "https://discord.gg/mdCzGnE")
 .setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
 .setTimestamp()

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "server"
      }