const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

module.exports = {
	name: 'ticket',
	description: 'Opens a support ticket.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {
     if(message.channel.name.toLowerCase() === 'bot-commands') {
        let TicketType = args[0]

        if(TicketType && TicketType.toLowerCase().includes("game")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "game-" + message.author.id)

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("game-" + message.author.id, { type: 'text'})
    
                Ticket.setParent("831698689919680522")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used to report in-game rule breakers (exploiters, bypassers, spammers, etc). In order to receive a fast reply from our moderators, please use the format below.")
                .addField("Format",
                "• The name of the player you're reporting.\n" +
                "• The reason of your report.\n" +
                "• Evidence(s)."
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {
                    
                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        }
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                    Ticket.send("<@743008736033112147>")
                    })

                }, 2000)

    
            } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }

        } else if(TicketType && TicketType.toLowerCase().includes("admin")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "admin-" + message.author.id)

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("admin-" + message.author.id, { type: 'text'})
    
                Ticket.setParent("831698755191046144")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used to report individual staff members.")
                .addField("Format",
                "• The username of the member you're reporting.\n" +
                "• The reason of your report.\n" +
                "• Evidence(s)."
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {

                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                        embed.delete()
                        Ticket.send("<@743008736033112147>")
                    })

                }, 2000)

    
            } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }
             } else if(TicketType && TicketType.toLowerCase().includes("department")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "department-" + message.author.id)

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("department-" + message.author.id, { type: 'text'})
    
                Ticket.setParent("831698830068023306")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used for the departmental issue or situation you are reporting.")
                .addField("Format",
                "No format for this :)"
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {

                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                        Embed.Delete()
                        Ticket.send("<@743008736033112147>")
                    })

                }, 2000)
                } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }
} else if(TicketType && TicketType.toLowerCase().includes("feedback")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "feedback-" + message.author.id)

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("feedback-" + message.author.id, { type: 'text'})
    
                Ticket.setParent("831698924163039252")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used for feedback.")
                .addField("Format",
                "there is no format for this :)" 
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {

                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                        embed.delete()
                        Ticket.send("<@743008736033112147>")
                    })

                }, 2000)
                } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }
} else if(TicketType && TicketType.toLowerCase().includes("misc")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "misc-" + message.author.id)

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("misc-" + message.author.id, { type: 'text'})
    
                Ticket.setParent("831698950431965214")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used for miscellaneous issues.")
                .addField("Format",
                "there is no format for this :)" 
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {

                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                        embed.delete()
                        Ticket.send("<@743008736033112147>")
                    })

                }, 2000)
                } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }// 832017759478874172
} else if(TicketType && TicketType.toLowerCase().includes("testing")){

            let UserTicked = message.guild.channels.cache.find(Channel => Channel.name === "ignore")

            if(!UserTicked){
    
                let Ticket = await message.guild.channels.create("ignore")
    
                Ticket.setParent("832017759478874172")

                Ticket.setTopic("Ticket Status: Open.")

                let TicketInstructions = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setThumbnail("https://cdn1.iconfinder.com/data/icons/steaming-gaming-1/80/auction-ban-banhammer-law-moderator-rules-512.png")
                .setTitle("Welcome to your ticket!")
                .setDescription("This ticket is used for miscellaneous issues.")
                .addField("Format",
                "there is no format for this :)" 
                )
                
                Ticket.send(TicketInstructions)

                setTimeout(() => {

                    Ticket.overwritePermissions([
                        {
                            id: message.author.id,
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                        {
                            id: message.guild.id,
                            deny: ["VIEW_CHANNEL"],
                        },
                        {
                            id: "831700249130565652",
                            allow: ["VIEW_CHANNEL","SEND_MESSAGES"],
                        },
                    ])

                    let Embed = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("🎟 Your ticket was successfully created.")
                    .setDescription("Please head to <#" + Ticket.id + "> and follow instructions given by <@831188607921684521>.")
        
                    message.channel.send("<@" + message.author.id + ">", Embed)

                    Ticket.send("<@" + message.author.id + ">").then(Ping =>{
                        Ping.delete()
                        embed.delete()
                        Ticket.send("<@743008736033112147>")
                    })

                }, 2000)
                } else {
    
                let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription(":x: Error - You cannot open another ticket.\n**Active ticket:** <#" + UserTicked.id + ">")
        
                message.channel.send("<@" + message.author.id + ">", Embed)
    
            }
        } else {

let Embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("The format of this command is ``.ticket [game, feedback, admin, department, or misc]``.")
        
                message.channel.send(Embed)

        }
        
	} else if(message.channel.name.toLowerCase() === 'general') { message.channel.send("Please run it in #bot-commands")
  }

}}
