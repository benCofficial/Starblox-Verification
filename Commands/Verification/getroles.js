const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
  name: 'getroles',
  description: 'Gets your current group rank.',
  args: false,
  guildOnly: true,
  cooldown: 5,
  async execute(message, args) {
  
    function SendEmbed(Message) {

      let GetRolesEmbed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(Message)

      message.channel.send("<@" + message.author.id + ">", GetRolesEmbed)

    }
   
    let Verified = await quick.get(`Verified${message.author.id}`)

    
    if (Verified) {
      
      let Verified_ID = await quick.get(`Verified_ID${message.author.id}`)

      await roblox.getRankInGroup(7102970, Verified_ID).then(function(Role_ID) { //800861092909678593

         if (Role_ID === 255) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("830525691748548608")
          SendEmbed("Successfully gave you the <@&808748789987934208> role.")
        } else if (Role_ID === 26) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("830525691748548608")
          SendEmbed("Successfully gave you the <@&808785551640494170> role.")
        } else if (Role_ID === 25) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024712646590474")
          SendEmbed("Successfully gave you the <@&789024712646590474> role.")
        } else if (Role_ID === 24) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("800861092909678593")
          SendEmbed("Successfully gave you the <@&800861092909678593> role.")
        } else if (Role_ID === 23) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024714190356530")
          SendEmbed("Successfully gave you the <@&789024714190356530> role.")
        } else if (Role_ID === 22) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024715087806464")
          SendEmbed("Successfully gave you the <@&789024715087806464> role.")
        } else if (Role_ID === 21) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024715925749801")
          SendEmbed("Successfully gave you the <@&789024715925749801> role.")
        } else if (Role_ID === 20) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024716710739978")
          SendEmbed("Successfully gave you the <@&789024716710739978> role.")
        } else if (Role_ID === 19) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024718219902976")
          SendEmbed("Successfully gave you the <@&789024718219902976> role.")
        } else if (Role_ID === 18) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("820828372505591808")
          SendEmbed("Successfully gave you the <@&820828372505591808> role.")
        } else if (Role_ID === 17) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("789024718870413333")
          SendEmbed("Successfully gave you the <@&789024718870413333> role.")
        } else if (Role_ID === 16) {
message.member.roles.add("789291029106786385")
          message.member.roles.add("824418572469534771")
          SendEmbed("Successfully gave you the <@&824418572469534771> role.")
        } else if (Role_ID === 15) {

          message.member.roles.add("789291029106786385")
          SendEmbed("Successfully gave you the <@&789291029106786385> role.")
        } else if (Role_ID > 15) {

          message.member.roles.add("824402793124855880")
          SendEmbed("Successfully gave you the <@&824402793124855880> role.")
        } else if (Role_ID === 14) {

          message.member.roles.add("824409228251889675")
          SendEmbed("Successfully gave you the <@&824409228251889675> role.")
        } else if (Role_ID === 13) {

          message.member.roles.add("789024722528370690")
          SendEmbed("Successfully gave you the <@&824409228251889675> role.")
        } else if (Role_ID >= 13) {

          message.member.roles.add("789290910159994930")
          SendEmbed("Successfully gave you the <@&789290910159994930> role.")
        } else if (Role_ID === 12) {

          message.member.roles.add("789024723807109161")
          SendEmbed("Successfully gave you the <@&789024723807109161> role.")
        } else if (Role_ID === 11) {

          message.member.roles.add("789024725501214730")
          SendEmbed("Successfully gave you the <@&789024725501214730> role.")
        } else if (Role_ID === 10) {

          message.member.roles.add("789024726357245982")
          SendEmbed("Successfully gave you the <@&789024726357245982> role.")
        } else if (Role_ID >= 10) {

          message.member.roles.add("789290811081752596")
          SendEmbed("Successfully gave you the <@&789290811081752596> role.")
        } else if (Role_ID === 9) {

          message.member.roles.add("789024727087185941")
          SendEmbed("Successfully gave you the <@&789024727087185941> role.")
        } else if (Role_ID === 9) {

          message.member.roles.add("789024727087185941")
          SendEmbed("Successfully gave you the <@&789024727087185941> role.")
        } else if (Role_ID === 8) {

          message.member.roles.add("789024728160665620")
          SendEmbed("Successfully gave you the <@&789024728160665620> role.")
        } else if (Role_ID === 7) {

          message.member.roles.add("789024729087344670")
          SendEmbed("Successfully gave you the <@&789024729087344670> role.")
        } else if (Role_ID === 6) {

          message.member.roles.add("789024729990299648")
          SendEmbed("Successfully gave you the <@&789024729990299648> role.")
        } else if (Role_ID === 5) {

          message.member.roles.add("789024730895613963")
          SendEmbed("Successfully gave you the <@&789024730895613963> role.")
        } else if (Role_ID >= 5) {

          message.member.roles.add("789290445683163166")
          SendEmbed("Successfully gave you the <@&789290445683163166> role.")
        } else if (Role_ID === 1) {

          message.member.roles.add("789024734020370463")
          SendEmbed("Successfully gave you the <@&789024734020370463> role.")

        } else { //789024730895613963

          SendEmbed("You are not a member of this group.")

        }

      })

    } else {

      let CannotGetRoles = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("You must use the **.verify** command before getting your roles.")
        message.channel.send("<@" + message.author.id + ">",CannotGetRoles)
    }
  }
}