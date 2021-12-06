/** @format */

const Event = require("../Structures/Event.js");
var Time = true;
var test = true;
var myDate = new Date();
module.exports = new Event("ready", client => {
	try {
		console.log("Bot is ready");
		/*
		//取得下一個整點時間
		hr  = myDate.getHours() + 1;
		setInterval(function() {
			//獲取日期時間
			myDate = new Date();
			//判定現在時間是否進入下一個整點時間
			if(test && parseInt(myDate.getHours()) == 1) {
				client.channels.cache.get('902435047217438761').send('好棒，一點了');
				test = false;
			}
			if(Time && parseInt(myDate.getHours()) == 3) {
				client.channels.cache.get('911972288767856730').send('好棒，三點了，該吃美味蟹堡了');
				Time = false;
			}
			
			if(myDate.getHours() > 4) {
				Time = true;
			}
			
		}, 10000);
		*/
	} catch(err) {
		console.log(err);
	}
});
