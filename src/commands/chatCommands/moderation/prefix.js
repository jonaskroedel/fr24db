const BaseCommand = require('../../../utils/structures/BaseCommand');
const StateManager = require('../../../utils/StateManager');

module.exports = class prefix extends BaseCommand {
    constructor() {
        super('prefix', 'modify', ['chprefix', 'defaultprefix']);
        this.connection = StateManager.connection;
    }

    async run (client, message) {

        if (message.member.permissions.has("MANAGE_GUILD")) {
            const [ cmdName, newPrefix ] = message.content.slice(prefix.length).split(/\s+/);

            if (newPrefix && newPrefix.length <= 10) {
                try {
                    await StateManager.connection.query(
                        `UPDATE GuildConfigurable SET cmdPrefix = '${newPrefix}' WHERE guildId = '${message.guild.id}'`
                    );
                    client.guildCommandPrefixes.set(message.guild.id, newPrefix);
                    message.channel.send(`Prefix updated to ${newPrefix}`);
                } catch(err) {
                    console.log(err);
                    message.channel.send(`An error occurred: ${err}`);
                }
            } else {
                message.channel.send('Please provide a new prefix that is 10 characters or less.');
            }
        } else {
            message.channel.send('You do not have permission to use this command.');
        }
    }
}
