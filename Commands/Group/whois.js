const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
	name: 'whois',
	description: 'Displays information about someone.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

        let UserRequested = message.mentions.users.first() || args[0]

        let MissingArgs = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("The format os this command is ``=whois [@User OR Roblox name]``.")

        if(!UserRequested) return message.channel.send(MissingArgs)

        if(message.mentions.users.size > 0){

            let Verified = await quick.get(`Verified${message.mentions.users.first().id}`)

            if(Verified){

                let Verified_ID = await quick.get(`Verified_ID${message.mentions.users.first().id}`)

                roblox.getPlayerInfo(Verified_ID).then(function(Information){

                    roblox.getRankNameInGroup(7102970, Verified_ID).then(RoleName =>{

                        let UserEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setThumbnail("http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=" + Information.username.toLowerCase())
                        .setTitle(Information.username)
                        .addField("Blurb" + Information.blurb + "*")
                        .addField("Username", " " + Information.username)
                        .addField("ID", " " + Verified_ID)
                        .addField("Followers", " " + Information.followerCount)
                        .addField("Following", " " + Information.followingCount)
                        .addField("Friends", " " + Information.friendCount)
                        .addField("Group Rank", " " + RoleName)
    
                        message.channel.send(UserEmbed)

                    })
                })

            } else {

                let NotVerified = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("<@" + message.mentions.users.first().id + "> isn't verified.")

                message.channel.send(NotVerified)

            }

        } else {
            
               roblox.getIdFromUsername(UserRequested).then(Detected_ID =>{

                roblox.getPlayerInfo(Detected_ID).then(function(Information){

                    roblox.getRankNameInGroup(7102970, Detected_ID).then(RoleName =>{

                        let UserEmbed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setThumbnail("http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=" + Information.username.toLowerCase())
                        .setTitle(Information.username)
                        .setDescription("*" + Information.blurb + "*")
                        .addField("Username", " " + Information.username)
                        .addField("ID", " " + Detected_ID)
                        .addField("Followers", " " + Information.followerCount)
                        .addField("Following", " " + Information.followingCount)
                        .addField("Friends", " " + Information.friendCount)
                        .addField("Group Rank", " " + RoleName)
    
                        message.channel.send(UserEmbed)

                    })
                })
            }).catch( error =>{

                let ErrorUser = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("This user doesn't exist.")

                message.channel.send(NotVerified)

            })

        }
	}
}