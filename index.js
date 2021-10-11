      // --- DISCORD.JS --- \\
const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const path = require('path')
const buttons = require('discord-buttons')

const { Intents } = DiscordJS

const client = new DiscordJS.Client({
  // These intents are recommended for the built in help menu
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
})

client.on('ready', () => {
  new WOKCommands(client, {
    // The name of the local folder for your command files
    commandsDir: path.join(__dirname, 'commands'),

    // The name of the local folder for your feature files
    featuresDir: path.join(__dirname, 'features'),
  })
      // The default is !
    .setDefaultPrefix('?')
})

client.login(process.env.TOKEN)