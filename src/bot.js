const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const {Client, GatewayIntentBits, Collection, REST, Routes} = require('discord.js');
const {registerCommands, registerEvents} = require('./utils/register');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
    ],
});


/*
    © Jonas Krödel 2023
    You may use and modify this code. You must mention me, the owner,
    and you may not pass off the code as your own!
*/

(async () => {

    client.once("ready", () => {
    });


    client.login(process.env.BOT_TOKEN);

    client.musicPlayers = new Map();
    client.commands = new Collection();
    client.slashCommands = new Collection();
    await registerCommands(client, '../commands/chatCommands');
    await registerEvents(client, '../events');
})();