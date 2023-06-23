const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Info about the bot'),

    async execute(client, interaction) {
        const embed = new EmbedBuilder()
            .setTitle("InfoPage")
            .setDescription(`Greetings ${interaction.user}!\n\nWe would like to inform you that FR24 is presently undergoing development. As it is in this stage, there may be instances of bugs, system crashes, or other irregularities affecting its performance. We earnestly request your understanding, as we are aware that the system is not yet optimized for seamless functionality. Moreover, please take note that FR24 is an independent project and does not have any affiliation with, nor is it endorsed by [Flightradar24](https://www.flightradar24.com).\n\nThank you for your comprehension and support.\n\nSincerely,\n[Jonas Krödel](https://www.github.com/jonaskroedel)`)
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