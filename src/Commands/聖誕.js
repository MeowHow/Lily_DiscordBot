/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "聖誕",
	description: "此加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		
		try {
			/*
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			/*
			let rndInt = Math.floor(Math.random() * (15 - 1 + 1) + 1)
			if(rndInt <= 5) {
				message.channel.send("https://tenor.com/bfdfS.gif");
			} else if (rndInt > 5 && rndInt <= 10) { 
				message.channel.send("https://tenor.com/bgQfK.gif");
			} else if (rndInt > 10 && rndInt <= 15) { 
				message.channel.send("https://tenor.com/2tTI.gif");
			}
			//
			message.channel.send({
				files: [
					"./Source/soon.jpg"
				]
			});
			*/
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
		
	}
});
