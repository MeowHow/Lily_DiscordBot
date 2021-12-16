/** @format */

const Command = require("../Structures/Command.js");
module.exports = new Command({
	name: "茶几不乖",
	description: "",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (15 - 1 + 1) + 1)

			if(rndInt <= 5) {
				message.channel.send({
					files: [
						"./Source/茶几不乖.png"
					]
				});
			} else if (rndInt > 5 && rndInt <= 8) { 
				message.channel.send({
					files: [
						"./Source/藍染茶几.png"
					]
				});
			} else if (rndInt > 8 && rndInt <= 11) { 
				message.channel.send({
					files: [
						"./Source/卡姆KO.gif"
					]
				});
			} else if (rndInt > 11 && rndInt <= 14) { 
				message.channel.send({
					files: [
						"./Source/踩火.gif"
					]
				});
			} else if (rndInt == 15) { 
				message.channel.send({
					files: [
						"./Source/火箭彈.png"
					]
				});
			} 
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
