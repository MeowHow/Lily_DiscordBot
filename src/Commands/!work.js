/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "?work",
	description: "地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.delete();
			message.channel.send('窩沒有錢QwQ');
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
