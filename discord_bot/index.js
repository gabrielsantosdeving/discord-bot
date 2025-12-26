const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

app.get('/', (req, res) => {
    res.send('Bot online 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

client.once('ready', () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('Pong 🏓');
    }
});

client.login(process.env.DISCORD_TOKEN);
