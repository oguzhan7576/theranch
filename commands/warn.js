const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    //

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("You cannot warn people");

    var user = message.guild.member(message.mentions.user.first() || message.guild.members.get(args[0]));
 
    if(!user) return message.channel.send("Specify a user.");

    if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can not this member warn.");

    var reason = args.join(" ").slice(22);

    if(!reason) return message.channel.send("Give a reason.");

     if(!warns[user.id]) warns[user.id] = {
         warns: 0
     };

     warns[user.id].warns++;

     fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
         if (err) console.log(err);
     });


















}

module.exports.help = {
    name: "warn"
}