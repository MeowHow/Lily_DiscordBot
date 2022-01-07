/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");


function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
            h = h << 13 | h >>> 19;
    return function () {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}

function sfc32(a, b, c, d) {
    return function () {
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
let time = 0, Nowtime, cooling = 600000;
module.exports = new Command({
    name: "自爆",
    description: "抖M茶几專用，用來自爆與所有人同歸於盡",
    async run(message, args, client) {
        try {
            message.channel.send("身分驗證中......")
            //反應區
            if (message.author.id == config.XgID) {
                let rndInt = Math.floor(Math.random() * 100)
                message.channel.send("驗證茶几身分成功......")
                if (Nowtime - time > cooling) {
                    if (rndInt <= 15) {
                        message.channel.send({
                            files: [
                                "./Source/自爆_01.png"
                            ]
                        });
                    } else if (rndInt <= 75) {
                        message.channel.send({
                            files: [
                                "./Source/自爆_01.png"
                            ]
                        });
                    } else {
                        message.channel.send({
                            files: [
                                "./Source/自爆_03.png"
                            ]
                        });
                    }
                } else {
                    let Milliseconds = (cooling - (Nowtime - time)); // /60000
                    let seconds = Math.floor(Milliseconds / 1000);
                    let minutes = Math.floor(seconds / 60);
                    seconds = seconds - (minutes * 60);
                    message.channel.send('冷卻中，剩餘時間' + minutes + ':' + seconds);
                }
            } else {
                message.channel.send("驗證茶几身分失敗，自爆中止......")
            }

        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
