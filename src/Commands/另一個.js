/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "另一個",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			if (config.glory) {
				message.channel.send("噢，這個～");
				message.channel.send({
					files: [
						"./Source/看看這隻狼.png"
					]
				});
				config.glory = false;
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
