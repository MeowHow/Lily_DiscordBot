/** @format */

const Command = require("../Structures/Command.js");
const fs = require('fs');
const Discord = require("discord.js");

module.exports = new Command({
	name: "蔚藍檔案",
	description: "顯示大家的ID",
	async run(message, args, client) {
		try {
			var temp = "";
			//反應區
			fs.readFile("./Data/BlueArchive.json", function (err, data) {
				if (err) {
					console.log("檔案讀取錯誤");
					return console.error(err);
				}
				let Info = JSON.parse(data);
				Object.keys(Info).forEach(function(key){
					temp += key +"在蔚藍檔案以「" + Info[key] + "」的身分成為老師\n";
			   });
			   const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle("蔚藍檔案身分對照表")
				.setDescription(temp);
				message.channel.send({ embeds: [exampleEmbed] });
			})
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
