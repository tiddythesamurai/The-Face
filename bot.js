const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setPresence({ game: { name: 'The Face' }, status: 'online' })
  .then(console.log)
  .catch(console.error);
  /*client.user.setAvatar('./avatar.png')
  .catch(console.error);*/
});

client.on("message", (message) => {

	
    switch (message.content.toLowerCase()){

    	case 'face':

    	message.channel.send({

    		file: "./avatar.png"

    	});
    	console.log(`The face appeard in the ${message.channel.name} channel`)

    }

});

client.login(config.token);