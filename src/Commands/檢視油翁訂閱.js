/** @format */

const Command = require("../Structures/Command.js");
const fs = require('fs');
const Discord = require("discord.js");

module.exports = new Command({
	name: "檢視油翁訂閱",
	description: "此指令需有prefix符號作為前綴",
	async run(message, args, client) {
		try {
			var temp = "";
			//反應區
			fs.readFile("./Data/Sub_Oil.json", function (err, data) {
				if (err) {
					console.log("檔案讀取錯誤");
					return console.error(err);
				}
				let Info = JSON.parse(data);
				Object.keys(Info).forEach(function(key){
					temp += key + '在' + Info[key] + "(偽)訂閱了賣油翁\n";
			   });
			   const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle("賣油翁(偽)訂閱紀錄")
				.setDescription(temp);
				message.channel.send({ embeds: [exampleEmbed] });
			})
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
