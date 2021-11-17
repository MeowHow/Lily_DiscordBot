/** @format */

const Discord = require("discord.js");

const Command = require("./Command.js");

const Event = require("./Event.js");

const intents = new Discord.Intents(32767);

const fs = require("fs");

class Client extends Discord.Client {
	constructor() {
		super({ intents });

		/**
		 * @type {Discord.Collection<string, Command>}
		 */
		this.commands = new Discord.Collection();
	}

    start() {
        fs.readdirSync("./Commands")
            .filter(file => file.endsWith(".js"))
	        .forEach(file => {
                 /**
		         * @type {Command}
		         */
		        const command = require(`../Commands/${file}`);
		        this.commands.set(command.name, command);
	        });
        fs.readdirSync("./Events")
			.filter(file => file.endsWith(".js"))
			.forEach(file => {
				/**
				 * @type {Event}
				 */
				const event = require(`../Events/${file}`);
				console.log(`Event ${event.event} loaded`);
				this.on(event.event, event.run.bind(null, this));
			});
    }
}

module.exports = Client;
