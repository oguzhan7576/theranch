const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {



    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Sorry you have no Permissions to this.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Specify a user");

    var muteRole = message.guild.roles.find("name", "muted");

    if (!muteRole) return message.channel.send(" The role does not exist");

    var muteTime = args[1];

    if (!muteTime) return message.channel.send("Give a Time.⏰");

    await (user.addRole(muteRole.id));

    message.channel.send(`${user} is gemuted for ${muteTime}`);

    setTimeout(function  () {
        
        user.removeRole(muteRole.id);

        message.channel.send(`${user} is unmuted.`);




    }, ms(muteTime));


}

module.exports.help = {
    name: "tempmute"
}