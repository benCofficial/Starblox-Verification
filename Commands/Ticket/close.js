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
	name: 'close',
	description: 'Closes a support ticket.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

        let NoPerms = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You need the <@&831700249130565652> role to use this command.")

        if(!message.member.roles.cache.has("831700249130565652")) return message.channel.send(NoPerms)

        if(message.channel.topic !== "Ticket Status: Open.") return;
message.channel.setParent("831881463182917652")
        let Transcript = []

        message.channel.messages.fetch().then(async messages => {
        
            const Database = require("@replit/database")
            const quick = new Database()

            let TicketOwner = await quick.get("TicketOwner" + message.channel.id)

            let Transcript = [];

            Transcript.push("•••••••••••• TICKET TRANSCRIPT ••••••••••••\n\nT" + messages.size + " messages\n\nThe conversation starts below.\n•••••••••••••••••••••••••••••••••••••••••••\n")
        
            const putInArray = async (data) => Transcript.push(data);
            const handleTime = (timestamp) => moment(timestamp).format("DD/MM/YYYY - hh:mm:ss a").replace("pm", "PM").replace("am", "AM"); 
        
            //for (const message of messages.array().reverse()) await putInArray(`${handleTime(message.timestamp)} ${message.author.username} : ${message.content}`);
            for (const message of messages.array().reverse()) await putInArray(`${message.author.tag}: ${message.content}`); 
        
            // TESTING

            Transcript.forEach((Transcript, i) => Transcript[i] = "- " + Transcript)

            Transcript = Transcript.join("\n")

            // END OF TESTING

            var options = {encoding:'utf-8', flag:'w'};
            let NewFile = await fs.writeFileSync("Ticket-" + message.author.id + ".txt", String(Transcript), options);
        
            let FileData = new Discord.MessageAttachment("./" + "Ticket-" + message.author.id + ".txt")

            let Success = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Ticket successfully closed, ticket will be deleted in 1 minute exactly.")

            message.channel.send(Success)
            
            message.guild.channels.cache.get("831880385197244416").send(FileData)

            //let TicketOwner = await quick.get("TicketOwner" + message.channel.id)

            //message.guild.members.cache.get(String(TicketOwner)).send(FileData)

            setTimeout(() => {
                
                fs.unlink(path.join("./" + "Ticket-" + message.author.id + ".txt"), function(err, result){

                })

            }, 1000)
        })
        	setTimeout(() => {
message.channel.delete()
	}, 60000);
}
	}
