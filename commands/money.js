exports.run = (message, bot, send) => {
    let user = (!message.mentions.user.first()) ? message.author : message.mentions.user.first();
    let mon = bot.profile.getMoney(user.id);
    send("**:atm: | " + user.username + " has " + mon + " :dollar:**")
  }
  
  exports.conf = {
    userPerm: [],
    botPerm: ["SEND_MESSAGES"],
    coolDown: 0,
    dm: true,
    category: "Social",
    help: "Get your current balance",
    args: "",
  }