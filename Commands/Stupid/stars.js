const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

module.exports = {
	name: 'stars',
	description: 'Sends a fun fact.',
  args: false,
  guildOnly: true,
  cooldown: 5,
	async execute(message, args) {

    message.channel.send(":eyes: Stars is a very pog guy! #GetStarbloxTo300kMembers")
        
	}
}