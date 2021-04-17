const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('OK'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

// ================= START BOT CODE ===================

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./Configuration.json');

const client = new Discord.Client();

// COMMAND HANDLER

client.cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./Commands');

const commandFiles = fs
	.readdirSync('./Commands')
	.filter(file => file.endsWith('.js'));

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./Commands/${folder}`)
		.filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./Commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command =
		client.commands.get(commandName) ||
		client.commands.find(
			cmd => cmd.aliases && cmd.aliases.includes(commandName)
		);

	if (!command) return;

	//let Premium = await quick.get(`Premium${message.guild.id}`)

	let Premium_Required = new Discord.MessageEmbed()
		.setTitle('<:Error:828714508649627648> Whitelist Required')
		.setColor('#da4453')
		.setDescription('The server owner must have been whitelisted.');

	//if(command.PremiumRequired && Premium !== true) return message.channel.send(Premium_Required)

	if (command.guildOnly && message.channel.type === 'dm') return;

	try {
		command.execute(message, args, client);
	} catch (error) {
		message.reply('```js\n' + error + '```');
	}
});

// EVENT HANDLER

const eventFiles = fs
	.readdirSync('./Events')
	.filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./Events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.login(process.env.DISCORD_TOKEN);
