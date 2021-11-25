/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "煉成雪苗",
	description: "煉金術",
	async run(message, args, client) {
		try {
			//反應區
			let head = ':seedling:';
			let body = '<:428579938925543426:902521312491216906>';
			let foot = '<:__:906914064507211777>';
			if(message.author.id == config.BmoID || message.author.id == config.SnowID ) {
				console.log('22221');
				
				message.channel.send(head + '\n' + body + '\n' + foot);
			} else if (message.author.id == config.XgID) {
				message.reply('我好像只能給你這個' + '\n' + '<:dora1:902521311589445702>' + '\n' + body + '\n' + foot);
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
