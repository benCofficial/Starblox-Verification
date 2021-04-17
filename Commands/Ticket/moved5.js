const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")
const moment = require("moment")

const path = require('path')

const fs = require("fs")

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const document = dom.window.document;

module.exports = {
	name: 'move-feedback',
	description: 'Moves ticket to game',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

        let NoPerms = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You need the <@&831700249130565652> role to use this command.")

        if(!message.member.roles.cache.has("831700249130565652")) return message.channel.send(NoPerms)

        if(message.channel.topic !== "Ticket Status: Open.") return;

        message.channel.setTopic("Ticket Status: Open.")
        message.channel.setParent("831698924163039252")
        message.channel.setName("moved-" + message.channel.name)
        
        

        let Success = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("Ticket moved to feedback by <@" + message.author.id + ">.")

        message.channel.send("<@" + message.author.id + ">", Success)
	}
}