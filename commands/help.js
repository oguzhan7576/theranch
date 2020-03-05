const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


try{
    
var text = "**The Ranch Command List** \n\n __The Ranch Command__ \n ``!membercount: See how many members, bot's there are and see how many people that are online.📘`` \n ``!Ping: Check Your Ping!⏳`` \n ``!server: Check The Ranch Server Information.📂`` \n ``!update: View the bot update📡`` \n ``!avatar: Check Your Avatar!😅`` \n ``!status: View the status of the bote.🌙`` \n ``!rate: rate a member.🤯`` \n ``!kill: Kill a member.🔪`` \n ``!userinfo: Check the member info.🙂`` \n ``!botinfo: Check the Bot information.🙂`` \n ``!id: Check your ID.🎈`` \n ``!invite: Invite The Ranch bot to your server.🧸`` \n ``!server: Check the The Ranch Discord server & Join!.🧸``  \n\n  __The Ranch MiniGames__ \n ``!sps: <stone, paper, scissors,💎`` \n ``!8ball: will I be rich later? (Get a random answer back)🎱`` \n ``!highfive: Give a member HighFive👋🏼``";

message.author.send(text);

message.channel.send("📝*Check your Dm!*");

} catch (error) {
    message.channel.send(embed)
}



}


module.exports.help = {
    name: "help"
}