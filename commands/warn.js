const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warning.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    //

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot warn people");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
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

var warnEmbed = new discord.RichEmbed()
.setDescription("Warn")
.setColor("#eb4034")
.setThumbnail(bicon)
.setAuthor("User Name", message.author.username)
.addField("Warned member", user)
.addField("Warned by", message.author)
.addField("Total Warns:", warns[user.id].warns)
.addField("Reason:", reason)
.setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
.setTimestamp();

var warnChannel = message.guild.channels.find(ch => ch.name == "📂sanction-log");
if(!warnChannel) return message.guild.send("I can not find the channel try again");

warnChannel.send(warnEmbed);

 

if(warns[user.id].warns == 3){

    var warnmessage = new discord.RichEmbed()
.setDescription("BEWARE" + user)
.setColor("#eb4034")
.addField("The Ranch:", "another warning and you will get a ban!!!");


message.channel.send(warnmessage);



}


else if(warns[user.id].warns == 4){

message.guild.member(user).ban(reason);
message.channel.send(`${user} has been banned from server.`);

    
}




}

module.exports.help = {
    name: "warn"
}