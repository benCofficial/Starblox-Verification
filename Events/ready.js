const Discord = require("discord.js")
const roblox = require("noblox.js")

const Database = require("@replit/database")
const quick = new Database()

module.exports = {
	name: 'ready',
	once: true,
    async execute(client) {

        roblox.setCookie(process.env.ROBLOX_COOKIE).then(function() {
            client.user.setActivity("Roblox Game: [🎉Update🎉] Starblox Cafe")
            console.log("Success")

        }).catch(function(err) {
            
            client.channels.cache.get("822890894239203393").send("<@775064125742120960> " + err)
        
        })
  //      const channel01 = client.channels.cache.find(channel => channel.id === "822890894239203393");
  //channel01.send("Bot restart successful, please use !verify as verification is disabled right now. <https://www.roblox.com/groups/7102970/Starblox-Cafe#!/about> #RoadTo300k"); //you may now verify by typing =verify. 
  //const channel02 = client.channels.cache.find(channel => channel.id === "808042680818597899");
  //channel02.send("Bot restart successful, please use !verify as verification is disabled right now. <https://www.roblox.com/groups/7102970/Starblox-Cafe#!/about> #RoadTo300k");

	}
}