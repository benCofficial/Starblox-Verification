/*const Discord = require("discord.js")
const client = new Discord.Client()
const roblox = require("noblox.js")

const Database = require("@replit/database")
const Client = new Database()
const express = require('express');
const app = express();

app.get("/getID/dsc/:id", (req, res) => {
    let id = parseInt(req.params.id);
    if (!id) return res.json({"status": "error", "message": "userID not supplied"})
    console.log(db.list().then(keys => {}))
    return res.json({"status": "error", "message": db.list().then(keys => {})})
    
});


module.exports = {
	name: 'verify',
	description: 'Verify yourself.',
    args: false,
    guildOnly: true,
    cooldown: 5,
	async execute(message, args, client) {

        let Verified = await Client.get(`Verified${message.author.id}`)

        if(Verified){

            let Verified_ID = await Client.get(`Verified_ID${message.author.id}`)

            roblox.getUsernameFromId(Verified_ID).then(function(Username){

                let AlreadyVerified = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("You are already verified as **" + Username + "**. If you meant to claim your roles, type =getroles")
                .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")

                message.channel.send(AlreadyVerified)

            })

        } else {
            
            let MessageSent

            let Instructions = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setAuthor("Verification: Finding your Roblox account")
            .setDescription("Please reply to this message with your **Roblox username**.")

            let Message = message.author.send(Instructions).catch( error =>{

                let Warning = new Discord.MessageEmbed()
                .setColor("RED")
                .setAuthor("Error")
                .setDescription("I cannot send you the verification instructions. Make sure your DMs are open!")
                .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")
    
                message.channel.send(`<@${message.author.id}>`, Warning)

                MessageSent = false

            })

            setTimeout(() => {
                if(MessageSent !== false){
                    
                    let Sent = new Discord.MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor("Success")
                    .setDescription("I sent you a private message explaining how to verify your Roblox account.")
                    .setFooter("Want a custom bot? Get it [here!](https://benrocks.xyz/services)")

                    message.channel.send(`<@${message.author.id}>`, Sent)

                    const filter = (m) => m.author.id === message.author.id

            
                        let channel = message.author.dmChannel;
                        if (!channel) channel = message.author.createDM();        
                        message.author.dmChannel.awaitMessages(filter2, { max: 1, time: 180000, errors: ['time'] }).then(MessageCollected =>{
            
                        const Reply = MessageCollected.first()
                        
                        roblox.getIdFromUsername(Reply.content).then(ID_Detected =>{

                            let Instructions_Code = new Discord.MessageEmbed()
                            .setColor("GREEN")
                            .setAuthor("Verification: Proving Ownership")
                            .setDescription("To prove that you are the owner of this Roblox account, please put the verification code below in your profile description.\n\nOnce done, please reply to this message saying **done** or **complete**.")
                            .addField("Verification Code", "``cool is the word of the people " + message.author.username.toLowerCase() + "``")

                            message.author.dmChannel.send(Instructions_Code)

                            const filter2 = (m) => m.author.id === message.author.id

                            message.author.dmChannel.awaitMessages(filter2, { max: 1, time: 180000, errors: ['time'] }).then(MessageCollected =>{
                                
                                const Reply = MessageCollected.first()
                                
                                if(Reply.content.toLowerCase() === "done" || Reply.content.toLowerCase() === "complete"){

                                    roblox.getPlayerInfo(ID_Detected).then(function(User_Information){

                                        let Instance_Description = User_Information.blurb

                                        if(Instance_Description.toLowerCase().includes("cool is the word of the people " + message.author.username.toLowerCase())){

                                            let Verified = new Discord.MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor("Verification: Success")
                                            .setDescription("You are now verified as **" + User_Information.username + "**.\nYou may now remove the verification code from your profile description.")
                                            let userverified = new Discord.MessageEmbed()
                                            .setColor("GREEN")
                                            .setAuthor("Verification: Success")
                                            .setDescription("A user is now verified as** " + User_Information.username + "**.")
                                            client.channels.cache.get("778409617675255808").send(userverified)
                                            message.author.dmChannel.send(Verified)
                                           
                                            if(message.guild.id === "831684955293089852") {
                                              message.member.roles.add("831692421917442078")
                                            }
                                                                                        if(message.guild.id === "735748614428557432") {
                                              message.member.roles.add("789028967528136704")
                                              message.member.roles.add("789024734020370463")
                                            }
                                            

                                            Client.set(`Verified${message.author.id}`, true)
                                            Client.set(`Verified_ID${message.author.id}`, ID_Detected)

                                            try {
                                                
                                                message.member.setNickname(User_Information.username)

                                              } catch (error) {
                                                


                                            }

                                        } else {

                                            let InvalidUsername = new Discord.MessageEmbed()
                                            .setColor("RED")
                                            .setAuthor("Verification: Invalid Code")
                                            .setDescription("No verification code was found in your Roblox description.")
                                
                                            message.author.dmChannel.send(InvalidUsername)

                                        }
                                    })
                                }
                            })

                        }).catch( error =>{

                            let InvalidUsername = new Discord.MessageEmbed()
                            .setColor("RED")
                            .setAuthor("Verification: Invalid username")
                            .setDescription("``" + Reply.content + "`` doesn't exist on Roblox.")
                
                            message.author.dmChannel.send(InvalidUsername)

                        })
                    })

                }
            }, 200)

        }
	}
}*/