const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

module.exports = {
	name: 'rat',
	description: 'Sends a fun fact.',
  args: false,
  guildOnly: true,
  cooldown: 5,
	async execute(message, args) {

    message.channel.send("<@" + message.author.id + ">" + "Adopted a squishy rat!")
    message.channel.send("https://media1.tenor.com/images/8be0274dde48525a387eb1ca09e935ff/tenor.gif")
        
	}
}