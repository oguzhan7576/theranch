const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.RichEmbed()
 .setDescription("[**Invite**](https://discord.gg/mdCzGnE)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to join The Ranch Server!", "https://discord.gg/mdCzGnE")
 .setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
 .setTimestamp();

 message.channel.send(inviteEmbed);

        message.delete();

}
      module.exports.help = {
        name: "server"
      }