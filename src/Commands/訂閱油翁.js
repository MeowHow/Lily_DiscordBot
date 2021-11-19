/** @format */

const Command = require("../Structures/Command.js");
const fs = require('fs');

module.exports = new Command({
	name: "訂閱油翁",
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
				if(Object.keys(Info).indexOf(message.author.username) != -1) {
					message.reply('你在' + Info[message.author.username] + '就訂閱過囉');
				}
				else {
					let myDate = new Date();
					let time = myDate.getFullYear() + '/'
					+  ((myDate.getMonth() + 1) > 9 ? (myDate.getMonth() + 1) : '0' + (myDate.getMonth() + 1)) + '/'
					+  (myDate.getDate() > 9 ?  myDate.getDate() : '0' +  myDate.getDate());
					Info[message.author.username] = time;	

					redata = JSON.stringify(Info);
					fs.writeFile("./Data/Sub_Oil.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("訂閱紀錄");
						message.reply('(偽)訂閱賣油翁成功');
					})
				}
			})
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
