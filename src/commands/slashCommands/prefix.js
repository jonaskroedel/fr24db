const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const StateManager = require('../../utils/StateManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('prefix')
        .setDescription('Change the prefix')
        .addStringOption(option => 
            option.setName('prefix')
            .setDescription('The new prefix')
            .setRequired(true)
            .setMaxLength(10)),
            
    async execute(client, interaction) {
        this.connection = StateManager.connection;
        console.log(interaction.options.getString('prefix'));
            const newPrefix = interaction.options.getString('prefix');

            if (newPrefix && newPrefix.length <= 10) {
                try {
                    await StateManager.connection.query(
                        `UPDATE GuildConfigurable SET cmdPrefix = '${newPrefix}' WHERE guildId = '${interaction.guild.id}'`
                    );
                    client.guildCommandPrefixes.set(interaction.guild.id, newPrefix);
                    interaction.reply({
                        content: (`Prefix updated to ${newPrefix}`),
                        ephemeral: true
                    });
                } catch(err) {
                    console.log(err);
                    interaction.reply({
                        content: (`An error occurred: ${err}`),
                        ephemeral: true
                    });
                }
            } else {
                interaction.reply({
                    content: ('Please provide a new prefix that is 10 characters or less.'),
                    ephemeral: true
                });
            }
    }
}