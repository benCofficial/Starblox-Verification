const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

module.exports = {
	name: 'ben',
	description: 'Sends a fun fact.',
  args: false,
  guildOnly: true,
  cooldown: 5,
	async execute(message, args) {

    message.channel.send("<:StarbloxLogo:736753659219542058>| Hello, My name is Ben. I will be handling your ticket today. If you are appealing please tell me as you can’t make an appeal over the ticket. I can help you with the following: \n <a:pinkarrow:803506865186537534> Reporting an: LR, MR, HR, SHR \n<a:pinkarrow:803506865186537534> General Inquiries \n<a:pinkarrow:803506865186537534> Report-A-User\n<a:pinkarrow:803506865186537534> Power Abuse.\n<a:pinkarrow:803506865186537534>  Boost Reward Claiming\n<a:pinkarrow:803506865186537534> Boost Issues\nIf you are looking for where to appeal to you can appeal at this link. https://forms.gle/eKZeJQYSbbbBFfaJ6 \n(Don’t click the link if you’re not looking to appeal!)\nPlease do not do the following: \n <a:pinkarrow:803506865186537534> Trolling \n<a:pinkarrow:803506865186537534> Caps abuse \n<a:pinkarrow:803506865186537534> Bypassing \n<a:pinkarrow:803506865186537534> Rude Behaves \  <a:pinkarrow:803506865186537534>\n Please don’t start any drama\n<a:pinkarrow:803506865186537534> Don’t be disrespectful \nIf you do decide to do them you will face consequences. But anyways please ask or report away!")
        
	}
}