const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


try{
    
var text = "**The Ranch Command List** \n\n __The Ranch Command__ \n ``!Ping: Check Your Ping!⏳`` \n ``!server: Check The Ranch Server Information.📂`` \n ``!update: View the bot update📡`` \n ``!avatar: Check Your Avatar!😅`` \n\n  __The Ranch MiniGames__ \n ``!sps: <stone, paper, scissors,💎`` \n ``!8ball: will I be rich later? (Get a random answer back)🎱``";

message.author.send(text);

message.channel.send("📝*Check your Dm!*");

} catch (error) {
    message.channel.send("Something went wrong");
}



}


module.exports.help = {
    name: "help"
}