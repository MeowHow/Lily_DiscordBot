/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "天罰",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send("嗯？誰？夜燈喵快用你的十萬伏特想想辦法啊！https://tenor.com/bFJ2r.gif");
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
