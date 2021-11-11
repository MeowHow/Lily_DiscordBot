/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "早安",
	description: "早安地雷",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (4 - 1 + 1) + 1)
			if (rndInt <= 2) {
				message.channel.send({
					files: [
						"./Source/早安.jpg"
					]
				});
			} else if (rndInt > 2) { 
				message.channel.send({
					files: [
						"./Source/早安.png"
					]
				});
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
		
	}
});
