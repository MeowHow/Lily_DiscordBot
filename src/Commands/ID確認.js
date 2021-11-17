/** @format */

const Command = require("../Structures/Command.js");
const fs = require('fs');

module.exports = new Command({
	name: "ID確認",
	description: "此指令需有prefix符號作為前綴",
	async run(message, args, client) {
		try {
			//反應區
			let order = new Array();
			order = args.split(' ');
			if(order.length == 3) {
				fs.readFile("./Data/BlueArchive.json", function (err, data) {
					if (err) {
						console.log("檔案讀取錯誤");
						return console.error(err);
					}
					let Info = JSON.parse(data);
					Info[order[1]] = order[2];
					redata = JSON.stringify(Info);

					fs.writeFile("./Data/BlueArchive.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("蔚藍檔案ID新增");
						message.reply('紀錄成功，輸入「蔚藍檔案」來查看ID');
					})
				})
			}
			else {
				message.reply('格式錯誤，正確格式為「!ID確認 暱稱 遊戲ID」');
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
