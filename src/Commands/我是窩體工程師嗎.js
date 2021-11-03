/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "我是窩體工程師嗎",
	description: "身分地雷",
	async run(message, args, client) {
		try {
			//反應區
			let role01 = message.member.roles.cache.has(config.EngineerID);
			//console.log(role);
			if (role01) {
				message.reply('你是');
			} else {
				message.reply('你不是');
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
