module.exports.run = async (bot, message, args) => {


 

message.channel.send("⏳ *Your Ping is*: " + (Date.now() - message.createdTimestamp) + "ms");



}


module.exports.help = {
    name: "ping"
}