/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");
const fs = require('fs');

module.exports = new Command({
	name: "筆記",
	description: "此指令需有prefix符號作為前綴",
	async run(message, args, client) {
		try {
			//反應區
			let order = new Array();
			order = args.substring(args.indexOf(' ')+1);;
			if(message.author.id == config.XgID) {
				fs.readFile("./Data/XgNotebook.json", function (err, data) {
					if (err) {
						console.log("檔案讀取錯誤");
						return console.error(err);
					}
					let Info = JSON.parse(data);
					//筆記數量
					let count = Object.keys(Info).length;
					Info[count+1] = order;	
	
					redata = JSON.stringify(Info);
					fs.writeFile("./Data/XgNotebook.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("筆記紀錄");
						message.reply('紀錄成功');
					})
				})
			} else if (message.author.id == config.SnowID) {
				fs.readFile("./Data/SnowNotebook.json", function (err, data) {
					if (err) {
						console.log("檔案讀取錯誤");
						return console.error(err);
					}
					let Info = JSON.parse(data);
					//筆記數量
					let count = Object.keys(Info).length;
					Info[count+1] = order;
					redata = JSON.stringify(Info);
					fs.writeFile("./Data/SnowNotebook.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("筆記紀錄");
						message.reply('紀錄成功');
					})
				})
			} else {
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
					+  ((myDate.getMonth() + 1) > 9 ? (myDate.getMonth() + 1) : '0' + (myDate.getMonth() + 1)) + '/'
					+  (myDate.getDate() > 9 ?  myDate.getDate() : '0' +  myDate.getDate()) + ' '
					+  (myDate.getHours() > 9 ?  myDate.getHours() : '0' +  myDate.getHours()) + ':'
					+  (myDate.getMinutes() > 9 ?  myDate.getMinutes() : '0' +  myDate.getMinutes()) + ':'
					+  (myDate.getSeconds() > 9 ?  myDate.getSeconds() : '0' +  myDate.getSeconds())
					Info[count+1] = message.author.username + '於' + time + '寫下「' + order + '」';	
	
					redata = JSON.stringify(Info);
					fs.writeFile("./Data/Notebook.json", redata, function (err) {
						if (err) {
							console.error(err);
						}
						console.log("筆記紀錄");
						message.reply('紀錄成功');
					})
				})
			}	
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
