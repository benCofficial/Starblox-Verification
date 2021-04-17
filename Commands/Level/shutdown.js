const Discord = require("discord.js")
const client = new Discord.Client()


module.exports = {
	name: 'restart',
	description: 'Sends message that the bot is shutting down for maintnence.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args, client) {
            const channel01 = client.channels.cache.find(channel => channel.id === "822890894239203393");
  channel01.send("Bot is restarting, please wait to verify.");
  const channel02 = client.channels.cache.find(channel => channel.id === "808042680818597899");
  channel02.send("Bot is restarting, please wait to verify.");
  }}