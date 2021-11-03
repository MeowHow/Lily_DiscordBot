/** @format */

const Event = require("../Structures/Event.js");
var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;

module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	const args = message.content.replace(/ /g, ""); 
	try {
		if (args.indexOf("一劑") != -1 )
		{
			message.channel.send({
				files: [
					"./Source/你需要一劑抹德納.png"
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
		} else if(args.indexOf("窮") != -1){
			message.channel.send({
				files: [
					"./Source/窮.png"
				]
			});
		} else if(args.indexOf("什麼蒙蔽了我的雙眼") != -1){
			message.channel.send({
				files: [
					"./Source/雙眼.png"
				]
			});
		} else if(args.indexOf("恭迎錯字邪神") != -1){
			/*
			myDate = new Date();
				newTime = myDate.getMinutes();
				if(newTime - oldTime >= 1){
					message.channel.send({
						files: [
								"./Source/恭迎邪神.jpg"
							]
						});
					oldTime = newTime;
				}
			*/
			let role02 = message.member.roles.cache.has(config.CthulhuID);
			if(role02) {
				message.channel.send({
					files: [
						"./Source/恭迎邪神.jpg"
					]
				});
			} else {
				message.reply('無信者，吾主不會眷顧於你。')
			}
		} else if(args.indexOf("你閉閉") != -1){
			message.channel.send('我找不到適合的，上面的都先閉閉。');
		} else if(args.indexOf("有雷") != -1){
			message.channel.send({
				files: [
					"./Source/想不到吧.png"
				]
			});
		} else if(args.indexOf("到家") != -1){
			message.channel.send({
				files: [
					"./Source/到家.png"
				]
			});
		} else if(args.indexOf("停止運作") != -1){
			message.channel.send({
				files: [
					"./Source/exe_.gif"
				]
			});
		} else if(args.indexOf("信仰") != -1){
			message.channel.send({
				files: [
					"./Source/克蘇魯天父.jpg"
				]
			});
		} else if(args.indexOf("心動的感覺") != -1){
			message.channel.send({
				files: [
					"./Source/心動的感覺-1.png"
					//"./Source/心動的感覺-2.png"
				]
			});
		} else if(args.indexOf("詐寢") != -1){
			//args.indexOf("不詐寢") != -1 || args.indexOf("不會詐寢"
			message.channel.send({
				files: [
					"./Source/詐寢.png"
				]
			});
		} /*else if(args.indexOf("詐寢") != -1){
			message.channel.send({
				files: [
					"./Source/詐寢剪掉.jpg"
				]
			});
		}*/ else if(args.indexOf("女友") != -1){
			message.channel.send({
				files: [
					"./Source/女友.png"
				]
			});
		}/* else if(args.indexOf("剪掉") != -1){
			message.channel.send({
				files: [
					"./Source/懶趴.png"
				]
			});
		}*/ /*else if(args.indexOf("欸糯米") != -1){
			message.channel.send({
				files: [
					"./Source/泡酒.png"
				]
			});
		}*/ else if(args.indexOf("辛酸畫面") != -1){
			message.channel.send({
				files: [
					"./Source/辛酸畫面.png"
				]
			});
		} else if(args.indexOf("鈴玲兒") != -1){
			message.channel.send({
				files: [
					"./Source/鈴玲兒.png"
				]
			});
		} /*else if(args.indexOf("莫姊不要") != -1){
			
			message.channel.send({
				files: [
					"./Source/不要.png"
				]
			});
			
		}*/ else if(args.indexOf("看醫生") != -1){
			message.channel.send({
				files: [
					"./Source/Doctor.mov"
				]
			});
		} /*else if(args.indexOf("進來") != -1){
			message.channel.send({
				files: [
					"./Source/進來.png"
				]
			});
		}*/ else if(args.indexOf("好吃魔法") != -1){
			message.reply('萌欸萌欸～啾～:heart:');
		} /*else if(args.indexOf("嗨糯米") != -1 || args.indexOf("嗨茶几") != -1){
			myDate = new Date();
			newTime = myDate.getMinutes();
			if(newTime - oldTime >= 1){
				message.channel.send({
					files: [
							"./Source/嗨.png"
						]
					});
				oldTime = newTime;
			}
		}*/ else if(args.indexOf("開房") != -1){
			//makeChannel(message);
		} else if(args.indexOf("廠商的疏失") != -1){
			message.channel.send({
				files: [
					"./Source/廠商的疏失.png"
				]
			});
		} else if(args.indexOf("天罰") != -1){
			message.channel.send("嗯？誰？夜燈喵快用你的十萬伏特想想辦法啊！https://tenor.com/bFJ2r.gif");
		} else if(args.indexOf("呼叫保護協會") != -1){
			message.channel.send("左線預備～阿苗(-wO)▄︻┻┳═一\n右線預備～冬喵(-wO)▄︻┻┳═一\n全線預備～白弓(-wO)▄︻┻┳═一\n等候命令");
			fire = true;
		} else if(args.indexOf("開火") != -1 && fire){
			message.channel.send("阿苗(-wO)▄︻┻┳═一 - - - -\n冬喵(-wO)▄︻┻┳═一 - - - -\n白弓(-wO)▄︻┻┳═一 - - - -");
			fire = false;
		} else if(args.indexOf("ㄏㄚˋ") != -1){
			message.channel.send("你好兇，你是不是兇我இдஇ");
		} else if(args.indexOf("不給糖就搗蛋") != -1){
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (12 - 1 + 1) + 1)
			if(rndInt <= 5) {
				message.channel.send(":heart:搗～蛋～:heart:");
			} else if (rndInt > 5 && rndInt <= 10) { 
				message.channel.send(":candy:糖果～糖果～:candy:");
			} else {
				message.channel.send("https://tenor.com/SxzM.gif");
			}
		} else if(args.indexOf("NTR欠砍") != -1 || args.indexOf("讓我砍砍") != -1) {
			if(message.author.id == config.MeowHowID) {
				message.channel.send('https://tenor.com/baz4u.gif');
			}
		} else if(args.indexOf("恭喜") != -1){
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			if(rndInt <= 5) {
				message.channel.send("https://tenor.com/brJVM.gif");
			} else { 
				message.channel.send("https://tenor.com/bzqi5.gif");
			}
		} 
		
		/*else if(args.indexOf("蘭蘭我婆") != -1){
			if(message.author.id == config.MeowHowID) {
				message.channel.send('穩妥LA');
			} else {
				message.channel.send({
					files: [
						"./Source/作夢.jpg"
					]
				});
			}
		}*/

		switch (args) {
			case '恭迎犬哥':
				myDate = new Date();
				newTime = myDate.getMinutes();
				if(newTime - oldTime >= 1){
					message.channel.send({
						files: [
								"./Source/恭迎犬哥.png"
							]
						});
					oldTime = newTime;
				}
				break;

			case '蘭尾掰掰':
					case '蘭尾88':
						case '蘭尾再見':
					message.reply('我們晚點見:heart:');
				break;
				
			default:
				break;
		}

		const command = client.commands.find(cmd => cmd.name == args);

		if (!command) return;

		command.run(message, args, client);
	}
	catch (e) {
		message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
});
