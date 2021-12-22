/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json");

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
/*
function mulberry32(a) {
    return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}
*/
module.exports = new Command({
    name: "隨機測試",
    description: "",
    async run(message, args, client) {
        try {
            //反應區
            // Create xmur3 state:
            let date = new Date();
            console.log(date.getTime());
            let seed = xmur3(String(date.getTime()));
            // Output four 32-bit hashes to provide the seed for sfc32.
            let rand = sfc32(seed(), seed(), seed(), seed());
            console.log(rand());
            let rndInt = Math.floor(rand() * (15 - 1 + 1) + 1);
            console.log(rndInt);
            // Output one 32-bit hash to provide the seed for mulberry32.
            //var rand = mulberry32(seed());
            //console.log(rand());

        } catch (error) {
            message.channel.send('我似乎該有反應，但貓豪寫錯程式了，不過貓豪還是很棒，uma<3。');
            console.log(error);
        }
    }
});
