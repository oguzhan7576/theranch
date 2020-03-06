module.exports.run = async (_, message, args) => {
    const answers = ["Yes✅", "No❌", "Maybe🌂", "Please ask again later❗️"];
    const response = answers[Math.floor(Math.random() * answers.length)];
  
    if (args.length < 2) {
      return message.channel.send("Please ask a more descriptive question");
    }
  
    if (!message.content.includes("?")) {
      return message.channel.send(
        "Make sure your question ends with a question mark"
      );
    }
  
    message.channel.send(response);
  };
  
  module.exports.help = {
    name: "8ball"
  }; 