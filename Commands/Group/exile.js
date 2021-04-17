const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
	name: 'exile',
	description: 'Exils someone from the Roblox group.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

        let NoPerms = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You need the <@&830595149179912192> role to use this command.")

        if(!message.member.roles.cache.has("830595149179912192")) return message.channel.send(NoPerms)

        let UserToExile = args[0]

        let NoUserToExile = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("The format of this command is ``!exile [player_name]``.")
        
        if(!UserToExile) return message.channel.send(NoUserToExile)

        roblox.getIdFromUsername(UserToExile).then(function(Detected_ID){

            roblox.getRankInGroup(7270395, Detected_ID).then(function(Rank_ID){

                let CannotExile = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("I cannot exile this user from the group.")

                if(Rank_ID === 8 || Rank_ID === 255) return message.channel.send(CannotExile)

                roblox.getPlayerInfo(Detected_ID).then(function(Player_Information){

                    roblox.getRankNameInGroup(7270395, Detected_ID).then(function(User_Rank){

                        let Warning = new Discord.MessageEmbed()
                        .setColor("ORANGE")
                        .setDescription("Are you sure you want to exile ``" + Player_Information.username + " (" + User_Rank + ")`` from the group?")

                        const filter = (reaction, user) => {
                            return ["✅","❌"].includes(reaction.emoji.name) && user.id === message.author.id
                        }

                        message.channel.send(Warning).then(InstanceMessage =>{
                            InstanceMessage.react("✅")
                            InstanceMessage.react("❌")
                            InstanceMessage.awaitReactions(filter, { max: 1, time: 30000, errors: ['time'] }).then(ReactionCollected =>{

                                const Reaction = ReactionCollected.first()
                                
                                if(Reaction.emoji.name === "✅"){

                                    let Success = new Discord.MessageEmbed()
                                    .setColor("GREEN")
                                    .setDescription("Successfully exiled ``" + Player_Information.username + " (" + User_Rank + ")`` from the group.")

                                    InstanceMessage.edit(Success)
                                    InstanceMessage.reactions.removeAll()
                                    roblox.exile(7270395, Detected_ID)

                                } else {

                                    InstanceMessage.delete()
                                    message.delete()

                                }
                            })
                        })
                    })
                })
            })

        }).catch( error =>{

            let InvalidUsername = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("``" + UserToExile + "`` doesn't exist.")

            message.channel.send(InvalidUsername)
            
        })

	}
}