/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "生火",
	description: "生火地雷",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (100 - 1 + 1) + 1)
			if(rndInt <= 30) {
				message.channel.send("施放失敗，你的柴火咧？");
			} else if (rndInt > 30 && rndInt <= 50) { 
				message.channel.send("https://tenor.com/KXUt.gif");
			} else if (rndInt > 50 && rndInt <= 80) { 
				message.channel.send("https://tenor.com/bmDdl.gif");
			} else if (rndInt > 80 && rndInt <= 95){
				message.channel.send("https://tenor.com/tcfy.gif");
			} else {
				message.channel.send("https://tenor.com/4qZh.gif");
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
