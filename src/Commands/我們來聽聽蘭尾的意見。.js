/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "我們來聽聽蘭尾的意見。",
	description: "你最好去看一下醫生地雷",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send('雖然人類的性癖是自由的，但是我還是建議你去看一下醫生。');
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
