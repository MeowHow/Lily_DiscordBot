/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
module.exports = new Command({
	name: "恭迎錯字邪神",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			let role = message.member.roles.cache.has(config.CthulhuID);
			if(role) {
				message.channel.send({
					files: [
						"./Source/恭迎邪神.jpg"
					]
				});
			} else {
				message.reply('無信者，吾主不會眷顧於你。')
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
