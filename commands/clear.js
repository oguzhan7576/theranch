const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
    
 //!clear 21

if(!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("You do not have Permissions.");

if (!args[0]) return message.reply("Specify quantity.");

if(Number.isInteger(parseInt(args[0]))){

var amount = parseInt(args[0]) + 1;

message.channel.bulkDelete(amount).then(() => { 

    if(args[0] == 0){

        message.channel.send(`I cannot delete 0 messages`).then(msg => msg.delete(3000));



    } else if (args[0] == 1){

        message.channel.send(`I have 1 message deleted.`).then(msg => msg.delete(3000));
    
    

    }
    

    

    

    
        

        
    message.channel.send(`I have 1 message deleted.`).then(msg => msg.delete(3000));

});

     } else { 
         return message.channel.send("Specify quantity.");
        
}




}

module.exports.help = {
    name: "clear"
}