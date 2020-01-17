// Importar Discord API
Discord = require("discord.js");

//Conectar a la API como usuario.
var bot = new Discord.Client();

const token = process.env.TEST_BOT_TOKEN;

//Comunica Que El Bot Está Encendido
bot.on('ready', () =>
{
  console.log("Logged in as "+bot.user.username+" "+bot.user.id+".");
  console.log('I am ready!')
  exports.activeServers = bot.guilds.array();
  for (let value of exports.activeServers) //Lista De Servdiores Conectados
  {
    console.log(value.name);
  }
})

//Las cosas que se ejecutan cada vez que el bot ve un mensaje.
bot.on("message", (message) =>
{
  if(message.content.substring(0,1) == "!") //Comprueba si la primera letra de un mensaje es un !
  {
    let commandArgs = message.content.substring(1).split(/\s+/) //Quita el archivo ! y luego divide el resto del mensaje en fragmentos basados en espacios en blanco

    if(commandArgs[0] == "hello") //Comprueba si la primera palabra es hola
    {
      message.channel.send("Hello "+message.author.username+".  Como Estás Hoy?? - Created By Jordi");  //Envía un mensaje en el mismo canal que !hello fue escrito.
    }
  }
})

bot.login(token);
