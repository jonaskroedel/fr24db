const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('latency'),

    async execute(client, interaction) {
        await interaction.reply({
            content: "pinging..."
        });
        const Botlatency = Math.abs(Date.now() - interaction.createdTimestamp);
        const Apilatency = client.ws.ping;
        await interaction.editReply({
            content: `Bot latency: \`${Botlatency}ms\`, Api latency: \`${Apilatency}ms\` `
        });
    }
}