const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Info about the bot'),

    async execute(client, interaction) {
        console.log('Interaction reached')
        const embed = new EmbedBuilder()
            .setTitle("InfoPage")
            .setDescription("FR24 is a bot to access live flight data from [flightradar24.com](https://www.flightradar24.com/).\n_This bot is not associated with or endorsed by Flightradar24!_")
            .setColor("#00ff00")
            .setImage("https://www.flightradar24.com/blog/wp-content/uploads/2020/04/Hi_Res.jpg")
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