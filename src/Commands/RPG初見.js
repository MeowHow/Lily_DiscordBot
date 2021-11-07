/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "RPG初見",
	description: "RPG初見註冊",
	async run(message, args, client) {
		try {
			console.log("1");
			console.log(args.length);
			//反應區
			if(args.length == 3) {
				console.log("給過");
				console.log("./PHP/RPG.php?RPG_name=" + encodeURIComponent(args[1]) + "&DC_id=" + encodeURIComponent(args[2]));
				let XMLHttpRequest = require('xhr2');
				let req = new XMLHttpRequest();
                req.open("GET", "./PHP/RPG.php?RPG_name=" + encodeURIComponent(args[1]) + "&DC_id=" + encodeURIComponent(args[2]), false);
				req.onload = function() {
                    console.log(this.responseText);
                    let information = JSON.parse(this.responseText);
                    console.log(information);
				}
                req.send();
			}
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
