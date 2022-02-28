/** @format */

const config = require("../Data/config.json");
const Event = require("../Structures/Event.js");
const cmdlist = require("../Data/cmdlist.json");
const Plist = require("../Data/Plist.json");
const cmd_config = require("../Data/cmd_config.json");
const cmd_list = require("../Data/cmd_list.json");
var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;
var glory = false;

module.exports = new Event("messageCreate", (client, message) => {
	
	try {
		if (message.author.bot) return;
		//942087542101135370 企劃布告欄
		//942590810212405328 入口
		//942086356799225866 身分組選擇
		//942086317167226890 聊天大廳
		//943142702348894209 預告片片場
		//943142756568690758 禮物盒廣場
		//943144836742135808 禮物盒-進度或公告發布處
		//943142816324915291 錄音室-太陽分部
		//943144366350938182 太陽分部-進度或公告發布處
		//943142926614163456 錄音室-旭日微光分部
		//943144483913097257 旭日微光分部-進度或公告發布處
		//943148021590417418 卡片and錄音繳交處
		//943148587754340362 錄音室音檔繳交處-太陽
		//943148678170943488 錄音室音檔繳交處-旭日微光
		//943148945700421662 素材收集處
		//943149313507328040 企劃內容疑問解答處
		if( message.channel.id == '942087542101135370' || 
		message.channel.id == '942590810212405328' || 
		message.channel.id == '942086356799225866' || 
		message.channel.id == '942086317167226890' || 
		message.channel.id == '943142702348894209' || 
		message.channel.id == '943142756568690758' || 
		message.channel.id == '943144836742135808' || 
		message.channel.id == '943142816324915291' || 
		message.channel.id == '943144366350938182' || 
		message.channel.id == '943142926614163456' || 
		message.channel.id == '943144483913097257' || 
		message.channel.id == '943148021590417418' || 
		message.channel.id == '943148587754340362' || 
		message.channel.id == '943148678170943488' || 
		message.channel.id == '943148945700421662' || 
		message.channel.id == '943149313507328040'|| 
		message.channel.id == '944253407185739837') {
			return;
		}
		//console.log(message.content);
		//Math.floor(Math.random() * (max - min + 1) + min)
		//console.log(Math.floor(Math.random() * (1 - 0 + 1) + 0))
		if (message.content.startsWith(config.prefix)) {
			const temp = message.content.substring(config.prefix.length);
			let order = new Array();
			order = temp.split(' ');
			command = client.commands.find(cmd => cmd.name == order[0]);
			if (!command) {
				return;
			}
			command.run(message, temp, client);
			return;
		}
		else {
			
			//骰子
			const dicetxt = message.content.toLowerCase();
			if(dicetxt.indexOf("1d20") == 0 || dicetxt.indexOf("1d100") == 0){
				let t = message.content.split(/\s/);
				//Math.floor(Math.random() * (max - min + 1) + min)
				if(t[0].toLowerCase() == "1d20") {
					let dice = Math.floor(Math.random() * (20 - 1 + 1) + 1);
					let txt = '';
					if(t.length > 1){
						txt = '#' + t[1] + '\n';
					}
					txt += t[0] + ' → ' + dice.toString();
					message.reply(txt);
				}
				else if(t[0].toLowerCase() == "1d100") {
					let dice = Math.floor(Math.random() * (100 - 1 + 1) + 1);
					let txt = '';
					if(t.length > 1){
						txt = '#' + t[1] + '\n';
					}
					txt += t[0] + ' → ' + dice.toString();
					message.reply(txt);
				}
				return;
			}
			const args = message.content.replace(/ /g, "");
			
			for (let i = 0; i < Plist.length; i++) {
				if (args == Plist[i]) {
					return;
				}
			}

			if(args.indexOf("NTR欠砍") != -1 || args.indexOf("讓我砍砍") != -1) {
				if(message.author.id == config.MeowHowID) {
					message.channel.send('https://tenor.com/baz4u.gif');
				}
			} else if(args.indexOf("==") != -1){
				message.channel.send({
					files: [
						"./Source/真的.png"
					]
				});
			} else if(args.indexOf("真的不對勁") != -1){
				message.channel.send({
					files: [
						"./Source/效率蘭警-特效.jpg"
					]
				});
			} else if(args.indexOf("不對勁") != -1){
				message.channel.send({
					files: [
						"./Source/效率蘭警.jpg"
					]
				});
			}

			let command;
			if(cmd_config[args]) {
				//單詞雷
				command = client.commands.find(cmd => cmd.name == cmd_config[args].type);
				command.run(message, args, client);
			}
			else {
				//包含雷
				for (let T in Object.keys(cmd_list)) {
					if(args.indexOf(Object.keys(cmd_list)[T]) != -1){
						command = client.commands.find(cmd => cmd.name == cmd_list[Object.keys(cmd_list)[T]].type);
						
						command.run(message, Object.keys(cmd_list)[T], client);
					}
				}
			}


			for (let i = 0; i < cmdlist.length; i++) {
				if (args.indexOf(cmdlist[i]) > -1) {
					command = client.commands.find(cmd => cmd.name == cmdlist[i]);
					command.run(message, cmdlist[i].toString(), client);
					return;
				}
			}
			command = client.commands.find(cmd => cmd.name == args);
			if (!command) {
				return;
			}
			command.run(message, args, client);
		}
	}
	catch (e) {
		message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
});
