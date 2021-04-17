const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
	name: 'test',
	description: 'Forcerole someone',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

       

	}
}