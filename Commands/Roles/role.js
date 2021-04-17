const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

module.exports = {
	name: 'role',
	description: 'Adds (or remove) a role to someone.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args) {

        let NoPerms = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You need the <@&822866671004942386> role to use this command.")

        if(!message.member.roles.cache.has("822866671004942386")) return message.channel.send(NoPerms)

        let User = message.mentions.users.first()
        let Role =args[1]

        let Missing = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("The format of this command is ``=role [@User] [Role Name]``.")

        if(!User || !Role) return message.channel.send(Missing)

        let RoleFound = message.guild.roles.cache.find(Role => Role.name.toLowerCase().includes(args[1].toLowerCase()))

        let NotFound = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("No role was found.")

        if(!RoleFound) return message.channel.send(NotFound)

        if(message.guild.members.cache.get(User.id).roles.cache.find(Role => Role.id === RoleFound.id)){

            let Success = new Discord.MessageEmbed()
            .setColor("RED")
            .setDescription("Successfully removed role <@&" + RoleFound.id + "> from <@" + User.id + ">.")

            message.guild.members.cache.get(User.id).roles.remove(RoleFound.id)

            message.channel.send(Success)

        } else {

            let Success = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription("Successfully added role <@&" + RoleFound.id + "> to <@" + User.id + ">.")

            message.guild.members.cache.get(User.id).roles.add(RoleFound.id)

            message.channel.send(Success)

        }
	}
}