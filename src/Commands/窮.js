/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "窮",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			if(message.author.id == config.WasherID) {
				message.channel.send({
					files: [
						"./Source/洗衣機窮.png"
					]
				});
			} else {
				message.channel.send({
					files: [
						"./Source/窮.png"
					]
				});
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
