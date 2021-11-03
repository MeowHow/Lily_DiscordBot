/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "醒",
	description: "醒地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send('我還沒有圖片，但我建議你清醒。');
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
