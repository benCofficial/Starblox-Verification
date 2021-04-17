const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
	name: 'forceverify',
	description: 'Force-verify someone.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args, client) {

        let NoPerms = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You need the <@&822866671004942386> role to use this command.")
        .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")

        if(!message.member.roles.cache.has("822866671004942386")) return message.channel.send(NoPerms)

        let UserToVerify = message.mentions.users.first()
        let RobloxUsername = args[1]

        let MissingArguments = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("The format of this command is ``.fverify [@User or User ID] [Roblox username]``.")
        .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")
        
        if(!UserToVerify || !RobloxUsername) return message.channel.send(MissingArguments)

        let SelfMention = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("Only members with the <@&822866671004942386> role are allowed to use this command on themselves.")
        .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")

        if(UserToVerify.id === message.author.id && !message.member.roles.cache.has("822866671004942386")) return message.channel.send(SelfMention)

        roblox.getIdFromUsername(RobloxUsername).then(Detected_ID =>{

            roblox.getPlayerInfo(Detected_ID).then(function(Information){

                quick.set(`Verified${UserToVerify.id}`, true)
                quick.set(`Verified_ID${UserToVerify.id}`, Detected_ID)

                let Success = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription("Successfully verifed <@" + UserToVerify.id + "> as **" + Information.username + "**.")
                                            if(message.guild.id === "831684955293089852") {
                                              message.guild.members.cache.get(UserToVerify.id).roles.add("831692421917442078")
                                            }
                                                                                        if(message.guild.id === "735748614428557432") {
                                              message.guild.members.cache.get(UserToVerify.id).roles.add("789028967528136704")
                                              message.guild.members.cache.get(UserToVerify.id).roles.add("789024734020370463")
                                            }
                                            

                message.channel.send(Success)
                client.channels.cache.get("778409617675255808").send(Success)

            })
        }).catch( error =>{

            let ErrorEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("Invalid Roblox username.")

            message.channel.send(ErrorEmbed)

        })
	}
}