/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ㄏㄚˋ",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send("你好兇，你是不是兇我இдஇ");
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
