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

bot.user.setActivity("The Ranch | !help", {type: "WATCHING"});

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

    return message.channel.send("**The Ranch > v11.1** \n *Update is succesfully Updated!*");

}

if(command === `${prefix}server`) {

    var icon = message.guild.iconURL;
    
       var serverEmbed = new discord.RichEmbed()
       .setDescription("Server Information")
       .setColor("#137d2f")
       .setThumbnail(icon)
       .addField("Server name:" , bot.user.username)
       .addField("You are joined on", message.member.joinedAt)
       .addField("Total members", message.guild.memberCount)
       .addField("Made on", bot.user.createdAt);


        return message.channel.send(serverEmbed);
    
    }






});


bot.login(process.env.token); 