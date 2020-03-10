const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


try{
    
 

var text = "hezrres";

message.author.send(text);





} catch (error) {
    message.channel.send("Something went wrong");
}





}


module.exports.help = {
    name: "staff"
}