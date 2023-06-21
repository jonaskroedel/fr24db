const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('testbed for new commands'),

    async execute(client, interaction) {
        // Hello World!
    }
}