const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const {Client, Intents, Collection} = require('discord.js');
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_MEMBERS]});
const {registerCommands, registerEvents} = require('./utils/register');
const {Routes} = require("discord-api-types/v9");
const {REST} = require("@discordjs/rest");


/*
    © Jonas Krödel 2022
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