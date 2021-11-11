/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "恭喜",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			if(rndInt <= 5) {
				message.channel.send("https://tenor.com/brJVM.gif");
			} else { 
				message.channel.send("https://tenor.com/bzqi5.gif");
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
