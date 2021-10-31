console.clear();
/*
git remote -v
git add .
git commit -m ''
git push
git clean -fx
*/
const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
/*
const ALL_INTENTS = 
    (1 << 0) +  // GUILDS
    (1 << 1) +  // GUILD_MEMBERS
    (1 << 2) +  // GUILD_BANS
    (1 << 3) +  // GUILD_EMOJIS_AND_STICKERS
    (1 << 4) +  // GUILD_INTEGRATIONS
    (1 << 5) +  // GUILD_WEBHOOKS
    (1 << 6) +  // GUILD_INVITES
    (1 << 7) +  // GUILD_VOICE_STATES
    (1 << 8) +  // GUILD_PRESENCES
    (1 << 9) +  // GUILD_MESSAGES
    (1 << 10) + // GUILD_MESSAGE_REACTIONS
    (1 << 11) + // GUILD_MESSAGE_TYPING
    (1 << 12) + // DIRECT_MESSAGES
    (1 << 13) + // DIRECT_MESSAGE_REACTIONS
    (1 << 14);  // DIRECT_MESSAGE_TYPING

// Outputs 32767
console.log(ALL_INTENTS);
*/
/*
const config = require('config.json');
client.login(config.MyTOKEN);
*/
require("dotenv").config();
client.login(process.env.MyTOKEN);

var myDate;
myDate = new Date();
var newTime = myDate.getMinutes();
var oldTime = 0;
var fire = false;

client.on('ready', () => {	
	try {
		console.log("Bot is ready");
	} catch(err) {
		console.log(err);
	}
});


client.on('message', async (msg) => {
	//console.log(msg.content); //用這方式看表符
	try {
		var mm = msg.content;
		let st = mm.replace(/ /g, ""); 
		//let megaT = mm.replace(/[-+/\'. %]/g, ""); 
		//console.log(megaT);
		if (st.indexOf("一劑") != -1 )
		{
			msg.channel.send({
				files: [
					"./source/你需要一劑抹德納.png"
				]
			});
		} else if(st.indexOf("真的不對勁") != -1){
			msg.channel.send({
				files: [
					"./source/效率蘭警-特效.jpg"
				]
			});
		} else if(st.indexOf("不對勁") != -1){
			msg.channel.send({
				files: [
					"./source/效率蘭警.jpg"
				]
			});
		} else if(st.indexOf("窮") != -1){
			msg.channel.send({
				files: [
					"./source/窮.png"
				]
			});
		} else if(st.indexOf("什麼蒙蔽了我的雙眼") != -1){
			msg.channel.send({
				files: [
					"./source/雙眼.png"
				]
			});
		} else if(st.indexOf("恭迎錯字邪神") != -1){
			myDate = new Date();
			newTime = myDate.getMinutes();
			if(newTime - oldTime >= 1){
				msg.channel.send({
					files: [
							"./source/恭迎邪神.jpg"
						]
					});
				oldTime = newTime;
			}
		} else if(st.indexOf("你閉閉") != -1){
			msg.channel.send('我找不到適合的，上面的都先閉閉。');
		} else if(st.indexOf("有雷") != -1){
			msg.channel.send({
				files: [
					"./source/想不到吧.png"
				]
			});
		} else if(st.indexOf("到家") != -1){
			msg.channel.send({
				files: [
					"./source/到家.png"
				]
			});
		} else if(st.indexOf("停止運作") != -1){
			msg.channel.send({
				files: [
					"./source/exe_.gif"
				]
			});
		} else if(st.indexOf("信仰") != -1){
			msg.channel.send({
				files: [
					"./source/克蘇魯天父.jpg"
				]
			});
		} else if(st.indexOf("心動的感覺") != -1){
			msg.channel.send({
				files: [
					"./source/心動的感覺-1.png"
					//"./source/心動的感覺-2.png"
				]
			});
		} else if(st.indexOf("不詐寢") != -1 || st.indexOf("不會詐寢") != -1){
			msg.channel.send({
				files: [
					"./source/詐寢.png"
				]
			});
		} /*else if(st.indexOf("詐寢") != -1){
			msg.channel.send({
				files: [
					"./source/詐寢剪掉.jpg"
				]
			});
		}*/ else if(st.indexOf("女友") != -1){
			msg.channel.send({
				files: [
					"./source/女友.png"
				]
			});
		}/* else if(st.indexOf("剪掉") != -1){
			msg.channel.send({
				files: [
					"./source/懶趴.png"
				]
			});
		}*/ /*else if(st.indexOf("欸糯米") != -1){
			msg.channel.send({
				files: [
					"./source/泡酒.png"
				]
			});
		}*/ else if(st.indexOf("辛酸畫面") != -1){
			msg.channel.send({
				files: [
					"./source/辛酸畫面.png"
				]
			});
		} else if(st.indexOf("鈴玲兒") != -1){
			msg.channel.send({
				files: [
					"./source/鈴玲兒.png"
				]
			});
		} /*else if(st.indexOf("莫姊不要") != -1){
			
			msg.channel.send({
				files: [
					"./source/不要.png"
				]
			});
			
		}*/ else if(st.indexOf("看醫生") != -1){
			msg.channel.send({
				files: [
					"./source/Doctor.mov"
				]
			});
		} /*else if(st.indexOf("進來") != -1){
			msg.channel.send({
				files: [
					"./source/進來.png"
				]
			});
		}*/ else if(st.indexOf("好吃魔法") != -1){
			msg.reply('萌欸萌欸～啾～:heart:');
		} /*else if(st.indexOf("嗨糯米") != -1 || st.indexOf("嗨茶几") != -1){
			myDate = new Date();
			newTime = myDate.getMinutes();
			if(newTime - oldTime >= 1){
				msg.channel.send({
					files: [
							"./source/嗨.png"
						]
					});
				oldTime = newTime;
			}
		}*/ else if(st.indexOf("開房") != -1){
			//makeChannel(msg);
		} else if(st.indexOf("廠商的疏失") != -1){
			msg.channel.send({
				files: [
					"./source/廠商的疏失.png"
				]
			});
		} else if(st.indexOf("天罰") != -1){
			msg.channel.send("嗯？誰？夜燈喵快用你的十萬伏特想想辦法啊！");
		} else if(st.indexOf("呼叫保護協會") != -1){
			msg.channel.send("左線預備～阿苗(-wO)▄︻┻┳═一\n右線預備～冬喵(-wO)▄︻┻┳═一\n全線預備～白弓(-wO)▄︻┻┳═一\n等候命令");
			fire = true;
		} else if(st.indexOf("開火") != -1 && fire){
			msg.channel.send("阿苗(-wO)▄︻┻┳═一 - - - -\n冬喵(-wO)▄︻┻┳═一 - - - -\n白弓(-wO)▄︻┻┳═一 - - - -");
			fire = false;
		} else if(st.indexOf("ㄏㄚˋ") != -1){
			msg.channel.send("你好兇，你是不是兇我இдஇ");
		} else if(st.indexOf("不給糖就搗蛋") != -1){
			//Math.floor(Math.random() * (max - min + 1) + min)
			let rndInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
			if(rndInt >= 5) {
				msg.channel.send(":heart:搗～蛋～:heart:");
			} else { 
				msg.channel.send(":candy:糖果～糖果～:candy:");
			}
		} else if(st.indexOf("NTR欠砍") != -1) {
			if(msg.author.id == '279250173979525121') {
				msg.channel.send('https://tenor.com/baz4u.gif');
			}
		}
		
		/*else if(st.indexOf("蘭蘭我婆") != -1){
			if(msg.author.id == '279250173979525121') {
				msg.channel.send('穩妥LA');
			} else {
				msg.channel.send({
					files: [
						"./source/作夢.jpg"
					]
				});
			}
		}*/
		
		switch(st)
		{
			case '為阿苗獻上禮炮':
			/*
				msg.channel.send({
					files: [
						"./source/禮炮.png"
					]
				});
			*/
			msg.channel.send('又想壞壞？抱歉這裡只剩下一隻炸蝦。',{
				files: [
					"./source/炸蝦.jpg"
				]
			});
		
			break;
		
			case '早安':
				msg.channel.send({
					files: [
						"./source/早安.jpg"
					]
				});
			break;
		
			case '恭迎犬哥':
				msg.channel.send({
					files: [
						"./source/恭迎犬哥.png"
					]
				});
			break;
			
			case '上車':
				msg.channel.send({
					files: [
						"./source/上車囉.gif"
					]
				});
			break;
			/*
			case '?':
				
				msg.channel.send({
					files: [
						"./source/物理超渡.jpg"
					]
				});
				
			break;
			*/
			case '醒':
				msg.channel.send('我還沒有圖片，但我建議你清醒。');
			break;
			
			case '晚安':
				msg.channel.send('https://tenor.com/bKCsG.gif');
			break;
			
			case '睡覺':
				msg.channel.send({
					files: [
						"./source/睡覺.jpg"
					]
				});
			break;
			
			case '邪神日常':
				msg.channel.send({
					files: [
						"./source/日常.png"
					]
				});
			break;
			
			case '我們來聽聽蘭尾的意見。':
				msg.channel.send('雖然人類的性癖是自由的，但是我還是建議你去看一下醫生。');
			break;
			
			case 'ชานมนุ่มๆอร้อยอร่อยจนให้อา':
				msg.channel.send('媽，我要一杯');
				msg.channel.send({
					files: [
						"./source/媽.jpg"
					]
				});
			break;
			
			case '渣姆喵':
				msg.channel.send({
					files: [
						"./source/渣姆喵.png"
					]
				});
			break;

			case '我有病':
				msg.reply({
					files: [
						"./source/Doctor.mov"
					]
				});
			break;

			case '貓豪有病':
				msg.channel.send({
					files: [
						"./source/貓豪有病.png"
					]
				});
			break;
			
			case '讓我進去':
				msg.channel.send('https://tenor.com/5LZw.gif');
			break;

			case '蘭尾掰掰':
				case '蘭尾88':
					case '蘭尾再見':
				msg.reply('我們晚點見:heart:');
			break;

			case '卡姆喵開台':
				//msg.channel.send('<@295578379107827722> :robot::robot::robot::robot::robot::robot::robot::robot:');
			break;
				
			case '測試ing':
				//console.log(client.emojis.array()); //表符清單
				//msg.channel.send('<:3x:902518306056065075>');
			break;

			case '測試ID':
				console.log(msg.author.id);
			break;

			case '測試':
				//guild.channels.array().filter(c => c.name === 'General')
				//console.log(msg.guild.channels.array().filter(c => c.name === 'botCreate_私密小聚會'));
			break;
		}
	}
	catch (e) {
		msg.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
		console.log(e);
	}
	
});
/*
//建立頻道
function makeChannel(message){
	NewArray = message.content.split('-');
	let name = "botCreate_" + NewArray[1];
	if(NewArray.length == 2) {
		NewArray[2] = 5;
	}
	
	message.guild.createChannel(name,{
		type: 'voice',
	}).then((channel) => {
		channel.setParent('579830645946056704');
		channel.setUserLimit(NewArray[2]) //限制人數上限
	})
}
*/
/*
//獲得頻道ID
console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        List all channels
        guild.channels.forEach((channel) => {
           console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
       })
   })
const localPNG = new Discord.Attachment('C:\Users\sssww\Desktop\bot\fku.png')
generalChannel.send(localPNG)
*/