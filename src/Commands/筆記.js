/** @format */

const Command = require("../Structures/Command.js");
const fs = require('fs');

module.exports = new Command({
	name: "筆記",
	description: "此指令需有prefix符號作為前綴",
	async run(message, args, client) {
		try {
			//反應區
			
			fs.readFile("./Data/Notebook.json", function (err, data) {
				if (err) {
					console.log("檔案讀取錯誤");
					return console.error(err);
				}
				let Info = JSON.parse(data);
				//筆記數量
				let count = Object.keys(Info).length;
				let myDate = new Date();
				let time = myDate.getFullYear() + '/'
				+  myDate.getMonth() + 1 + '/'
				+  myDate.getDate() + ' '
				+  myDate.getHours() + ':'
				+  myDate.getMinutes() + ':'
				+  myDate.getSeconds()
				Info[count++] = message.author.username + '於' + time + '寫下「' + args[1] + '」';	

				redata = JSON.stringify(Info);
				fs.writeFile("./Data/Notebook.json", redata, function (err) {
					if (err) {
						console.error(err);
					}
					console.log("筆記紀錄");
					message.reply('紀錄成功');
				})
			})
			
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
