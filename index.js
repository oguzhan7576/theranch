const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/" , (err, files) => {

if(err) console.log(err); 

var jsFiles = files.filter(f => f.split(".").pop() === "js");

if(jsFiles.length <= 0){
    console.log("Kon geen files vinden probeer het opnieuw bro");
    return; 
}

jsFiles.forEach((f,i) => {

var fileGet = require(`./commands/${f}`);
console.log(`De file ${f} is geladen`);

bot.commands.set(fileGet.help.name, fileGet);


})

});

bot.on("ready", async () => {

console.log(`${bot.user.username} is online!`)

bot.user.setActivity("The Ranch", {type: "LISTENING"});

})

//bericht
bot.on("message", async message => {
    
    if(message.author.bot) return;

if(message.channel.type === "dm") return;

var prefix = botConfig.prefix;

var messageArray = message.content.split(" ");

var command = messageArray[0];

var arguments = messageArray.slice(1);

var commands = bot.commands.get(command.slice(prefix.length));

if(commands) commands.run(bot,message, arguments);


//Bercihtje 





if(command === `${prefix}update`){

    return message.channel.send("**The Ranch > v11.8** \n *Update is succesfully Updated!*");

}

if(command === `${prefix}jo`){

    return message.channel.send("*Jo hoe gaat ie dan?");

}

if(command === `${prefix}sa`){

    return message.channel.send("Aleykumselam naber?");

}

if(command === `${prefix}boost`){
let user = message.mentions.users.first();
return message.channel.send(`${user} Heeft zojuist de server **GEBOOST!**`);
}


    
    

if(command === `${prefix}kick`){

var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

if(!kickUser) return message.channel.send("Member not found.");

var reason = arguments.join(" ").slice[22];
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you ar not admin.");

if(kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot kick this member");

var kick = new discord.RichEmbed()
.setDescription("Kick")
.setColor("#eb4034")
.addField("Kicked Member", kickUser)
.addField("Kicked by", message.author)
.addField("Reason", reason)
.setTimestamp()
.setFooter(member.id);


var kickChannel = message.guild.channels.find(`name`, "📂sanction-log");
if(!kickChannel) return message.guild.send("Can not found the channel.");

message.guild.member(kickUser).kick(reason);

kickChannel.send(kick);


    return;

} 

if(command === `${prefix}ban`) {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if(!banUser) return message.channel.send("Member not found.");
    
    var reason = arguments.join(" ").slice[22];
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry you ar not admin.");
    
    if(banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You cannot ban this member");
    
    var ban = new discord.RichEmbed()
    .setDescription("Ban list member")
    .setColor("#eb4034")
    .addField("Banned Member", banUser)
    .addField("Banned by", message.author)
    .addField("Reason", reason)
    .setTimestamp()
    .setFooter(member.id);
    
    
    var banChannel = message.guild.channels.find(`name`, "📂sanction-log");
    if(!banChannel) return message.guild.send("Can not found the channel.");
    
    message.guild.member(banUser).ban(reason);
    
    banChannel.send(ban);
    
    
        return;
    
 }

 bot.on("guildMemberAdd", member => {
 
    const channel = member.guild.channels.find("name", "report");
    if (!channel) console.log("Kan het kanaal niet vinden.");
 
    var joinEmbed = new discord.RichEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hoi ${member.user.username}, **Welkom op de server**. Hier nog meer uitleg.`)
        .setColor("#00FF00")
        .setTimestamp()
        .setFooter("Gebruiker gejoined.");
 
    channel.send(joinEmbed);
 
});

});

bot.login(process.env.token);