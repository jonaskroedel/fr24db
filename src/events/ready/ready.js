const BaseEvent = require('../../utils/structures/BaseEvent');
const { REST, Routes, Collection, Client } = require('discord.js')
const StateManager = require('../../utils/StateManager');
const path = require("path");
const fs = require("node:fs");
require('dotenv').config({ path: '../.env' });

/*
    © Jonas Krödel 2022
    You may use and modify this code. You must mention me, the owner,
    and you may not pass off the code as your own!
*/

module.exports = class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
        this.connection = StateManager.connection;
    }
    async run(client) {
        console.log(client.user.tag + ' has logged in.');

        client.slashCommands = new Collection();
        client.guildCommandPrefixes = new Collection();

        // start of ( / ) cmds refreshing

        const commands = [];
        // Grab all the command files from the commands directory you created earlier
        const foldersPath = path.join(__dirname, '../../commands');
        const commandFolders = fs.readdirSync(foldersPath);

        for (const folder of commandFolders) {
            // Grab all the command files from the commands directory you created earlier
            const commandsPath = path.join(foldersPath, folder);
            const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
            // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
            for (const file of commandFiles) {
                const filePath = path.join(commandsPath, file);
                const command = require(filePath);
                if ('data' in command && 'execute' in command) {
                    commands.push(command.data.toJSON());
                    client.slashCommands.set(command.data.name, command);
                } else {
                    console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                }
            }
        }

        // Construct and prepare an instance of the REST module
        const rest = new REST().setToken(process.env.BOT_TOKEN);

        // and deploy your commands!
        (async () => {
            try {
                console.log(`Started refreshing ${commands.length} application (/) commands.`);

                // The put method is used to fully refresh all commands in the guild with the current set
                const data = await rest.put(
                    Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                    { body: commands },
                );

                console.log(`Successfully reloaded ${data.length} application (/) commands.`);
            } catch (error) {
                // And of course, make sure you catch and log any errors!
                console.error(error);
            }
        })();
        // End of section
        
        // Start of getting all data out of the database

        client.guilds.cache.forEach(guild => {
            StateManager.connection.query(
                `SELECT cmdPrefix FROM GuildConfigurable WHERE guildId = '${guild.id}'`
            ).then(result => {
                const guildId = guild.id;
                const prefix = result[0][0].cmdPrefix;

                client.guildCommandPrefixes.set(guildId, prefix);
            }).catch(err => console.log(err));
        });
        // End of section
        client.user.setActivity(`ping`, { type: 'LISTENING' });
    }
}