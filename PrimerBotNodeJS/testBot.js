// Import the Discord API
Discord = require("discord.js");

//Connect to the API as a user.
var bot = new Discord.Client();

//Grab our Bot Token from the environment variable on our computer.
const token = process.env.TEST_BOT_TOKEN;

//Stuff that gets run once the bot connects successfully
bot.on('ready', () =>
{
  console.log("Logged in as "+bot.user.username+" "+bot.user.id+".");
  console.log('I am ready!')
  exports.activeServers = bot.guilds.array();
  for (let value of exports.activeServers) //Lists the servers that this bot is active in.
  {
    console.log(value.name);
  }
})

//Stuff that is run each time a message is seen by the bot.
bot.on("message", (message) =>
{
  if(message.content.substring(0,1) == "!") //Checks if the first letter of a message is a !
  {
    let commandArgs = message.content.substring(1).split(/\s+/) //Removes the ! and then breaks the rest of the message apart into chunks based on whitespace

    if(commandArgs[0] == "hello") //Checks if the first word is hello
    {
      message.channel.send("Hello "+message.author.username+".  How are you today?");  //Sends a message in the same channel that !hello was typed.
    }
  }
})

// Log our bot in
bot.login(token);
