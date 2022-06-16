/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: ".peko",
	description: "地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.reply("來，兔子怎麼叫你先叫一次看看。");
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
