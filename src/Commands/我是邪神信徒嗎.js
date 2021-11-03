/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "我是邪神信徒嗎",
	description: "身分地雷",
	async run(message, args, client) {
		try {
			//反應區
			let role02 = message.member.roles.cache.has(config.CthulhuID);
				//console.log(role);
			if (role02) {
				message.reply({
					files: [
						"./Source/cthulhu.png"
					]
				});
			} else {
				message.reply('你不可見證吾主尊容');
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
