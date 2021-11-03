/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "為阿苗獻上禮炮",
	description: "為阿苗獻上禮炮LA",
	async run(message, args, client) {
		try {
			//反應區
			message.channel.send('又想壞壞？抱歉這裡只剩下一隻炸蝦。');
			message.channel.send({
			files: [
					"./Source/炸蝦.jpg"
				]
			});
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
