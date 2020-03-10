bot.on("guildMemberAdd", member => {
 
    const channel = member.guild.channels.find("name", "👑welcome-log");
    if (!channel) console.log("Kan het kanaal niet vinden.");
 
    var joinEmbed = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hoi ${member.user.username}, **Welcome to  The Ranch server**. type *help* in #bot-commands for more information.`)
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter("Gebruiker gejoined.");
 
    channel.send(joinEmbed);
 
});
module.exports.help = {
    name: "welcome"
}