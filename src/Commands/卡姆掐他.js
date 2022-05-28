/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

module.exports = new Command({
	name: "-停用-卡姆掐他",
	description: "掐人拉",
	async run(message, args, client) {
		try {
			//反應區
			let rndInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			if(rndInt <= 8) {
				message.channel.send({
					files: [
						"./Source/卡姆掐他.png"
					]
				});
			}else { 
				message.channel.send('偏轉了');
				message.channel.send({
					files: [
						"./Source/卡姆掐他_2.png"
					]
				});
			} 
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
