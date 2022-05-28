/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
module.exports = new Command({
	name: "-停用-恭迎錯字邪神",
	description: "此地雷有加入至cmdlist使其成為包含詞",
	async run(message, args, client) {
		try {
			//反應區
			let role = message.member.roles.cache.has(config.CthulhuID);
			let rndInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			if(role) {
				if(rndInt > 6 && message.author.id == config.XgID) {
					message.channel.send({
						files: [
							"./Source/茶几反擊.gif"
						]
					});
				}
				else {
					message.channel.send({
						files: [
							"./Source/恭迎邪神.jpg"
						]
					});
				}
			} else {
				message.channel.send({
					files: [
						"./Source/無信者.png"
					]
				});
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
