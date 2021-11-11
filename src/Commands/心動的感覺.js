/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "心動的感覺",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send({
				files: [
					"./Source/心動的感覺-1.png"
					//"./Source/心動的感覺-2.png"
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
