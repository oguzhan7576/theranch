module.exports.run = async (bot, message, args) => {

 if(!args[0]) return message.channel.send("💎 ``Use sps <stone, paper, scissors>``");

 var options = ["stone", "paper", "scissors"];

 var result = options[Math.floor(Math.random() * options.length)]; 

 if(args[0] == "stone"){

if(result == "paper"){

    message.channel.send(`I have ${result} :notepad_spiral:, I won.❗️`);

     }else if(result == "scissors"){
         message.channel.send(`I have ${result} :scissors:, You Won❗️`);
     }else if(result == "stone"){
        message.channel.send(`I have ${result} :moyai:, It's a draw❗️`);

}


 }
 else if(args[0] == "paper"){

    if(result == "stone"){
    
        message.channel.send(`I have ${result} :moyai:, You won.❗️`);
    
         }else if(result == "scissors"){
             message.channel.send(`I have ${result} :scissors:, I Won❗️`);
         }else if(result == "paper"){
            message.channel.send(`I have ${result} :notepad_spiral:, It's a draw❗️`);
    
    }
    
    
     }
    
    else  if(args[0] == "scissors"){

        if(result == "stone"){
        
            message.channel.send(`I have ${result} :moyai:, I won.❗️`);
        
             }else if(result == "paper"){
                 message.channel.send(`I have ${result} :notepad_spiral:, You Won❗️`);
             }else if(result == "scissors"){
                message.channel.send(`I have ${result} :scissors:, It's a draw❗️`);
        
        }
        
        
         }
            
    





}

module.exports.help = {
    name: "sps"
}