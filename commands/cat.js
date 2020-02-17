const Discord = require("discord.js");
const request = require('request'); 

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("Here is your random cat")
                    .setFooter(`Information about: ${bot.user.username}. Developed by: The Ranch`)
                    .setTimestamp();
                              
                   message.channel.send(emb)  
            }
        });
    }

module.exports.help = {
  name:"cat"
}