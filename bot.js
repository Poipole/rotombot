const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!rotom') {
    	message.reply('is the best Pokemon!');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!snow') {
    	message.reply('https://youtu.be/T8cLW0Lckhc');
  	}
});

client.on('message', message => {
    if (message.content === 'ayy') {
    	message.reply('lmao');
  	}
});
//Test Features! ^^^

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
