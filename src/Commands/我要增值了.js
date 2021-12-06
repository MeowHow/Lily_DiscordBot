/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "我要增值了",
	description: "通用指令雷",
	async run(message, args, client) {
		try {
			//反應區
			if(message.author.id == config.MeowHowID) {
				message.channel.send({
					files: [
						"./Source/貓豪.png"
					]
				});
			} else {
				message.channel.send('不你不是');
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
