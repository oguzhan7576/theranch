const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `<:Bot:425631858265423883> ${bot.user.username}`, online)
    .addField("Bot Owner", "<:The Ranch:424890572919013397> <@291221132256870400>", online )
    .addField("Servers", `🛡 ${servsize}`, online)
    .addField("Channels", `📁 ${chansize}`, online)
    .addField("Users", `<:user:424958082691629057> ${usersize}`, online)
    .addField("Bot Library", "<:Discordjs:425241283779362816> Discord.js", online)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
    .setTimestamp();
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}