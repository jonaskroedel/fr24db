const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const path = require('path');
const {PythonShell} = require('python-shell');
const myPythonScript = path.join(__dirname, '..', '..', 'pythonScripts', 'test.py');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('req')
        .setDescription('Test for request')
        .addStringOption(option => 
            option.setName('icao')
                .setDescription('ICAO')
                .setRequired(true)),
                
    async execute(client, interaction) {

        let msgContent = ""

        let _data = interaction.options.getString('icao')

        let pyshell = new PythonShell(myPythonScript);

        pyshell.send(JSON.stringify(_data))

        pyshell.on('message', function (message) {
            console.log(message)
            msgContent += message;
        });

        pyshell.end(function (err) {
            if (err) {
                throw err;
            };
            interaction.reply(msgContent)
        })
    }
}
