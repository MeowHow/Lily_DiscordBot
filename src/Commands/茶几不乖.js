/** @format */

const Command = require("../Structures/Command.js");

function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

module.exports = new Command({
	name: "茶几不乖",
	description: "",
	async run(message, args, client) {
		try {
			//反應區
			//Math.floor(Math.random() * (max - min + 1) + min)

			let date = new Date();
			let Num = date.getTime() / date.getMilliseconds() + date.getSeconds();
            let seed = xmur3(String(Num));
            let rand = sfc32(seed(), seed(), seed(), seed());
            let rndInt = Math.floor(rand() * (15 - 1 + 1) + 1);

			if(rndInt <= 5) {
				message.channel.send({
					files: [
						"./Source/茶几不乖.png"
					]
				});
			} else if (rndInt > 5 && rndInt <= 8) { 
				message.channel.send({
					files: [
						"./Source/卡姆KO.gif"
					]
				});
			} else if (rndInt > 8 && rndInt <= 11) { 
				message.channel.send({
					files: [
						"./Source/藍染茶几.png"
					]
				});
			} else if (rndInt > 11 && rndInt <= 14) { 
				message.channel.send({
					files: [
						"./Source/踩火.gif"
					]
				});
			} else if (rndInt == 15) { 
				message.channel.send({
					files: [
						"./Source/火箭彈.png"
					]
				});
			} 
		} catch (error) {
			message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
			console.log(error);
		}
	}
});
