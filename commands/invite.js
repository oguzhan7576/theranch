const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](https://bots.ondiscord.xyz/bots/671809959553662996)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "https://bots.ondiscord.xyz/bots/671809959553662996")
 .setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
 .setTimestamp();

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "invite"
      }