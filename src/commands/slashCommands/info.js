const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Info about the bot'),

    async execute(client, interaction) {
        const embed = new MessageEmbed()
            .setTitle("InfoPage")
            .setDescription("FR24 is a bot to access live flight data from flightradar24.com")
            .setColor("#00ff00")
            .setFooter({
                text: `Requested by ${interaction.member.user.username}`,
                iconURL: interaction.member.displayAvatarURL({dynamic: true})
            })
            .setTimestamp()

            return await interaction.reply({
                embeds: [embed],
                ephemeral: false
            });
    }
}