const Discord = require("discord.js");
const client = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = Infinity;

client.on("ready", () => {
console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setPresence({game: {name: "!commands for help", type: 0}});
});

client.on('guildMemberAdd', member => {
const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Howdy! Welcome to Ilex Outpost, ${member}!`);
});

client.on('guildMemberRemove', member => {
const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`${member} has left the server! Farewell!`);
});
                                     
client.on('message', message => {
  if (message.content === '!getavatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

//offical features ^
client.on('message', message => {
    if (message.content === '!rotom') {
    	message.channel.send('Rotom is an open source Discord bot made by **Radiating#9066**! It is still in early development, so feel free to send him a message if you have any recommendations/feedback. Github page: https://github.com/Poipole/rotombot');
  	}
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('pong!');
  	}
});

client.on('message', message => {
    if (message.content === '!pineapple') {
    	message.channel.send('Pineapple pizza is the best pizza!');
  	}
});

client.on('message', message => {
    if (message.content === '!fusions') {
    	message.channel.send('http://pokefusion.japeal.com/');
  	}
});

client.on('message', message => {
    if (message.content === '!soap') {
    	message.channel.send('**Read the pins!**');
  	}
});

client.on('message', message => {
    if (message.content === '!soapy') {
    	message.channel.send('https://cdn.discordapp.com/attachments/387711694270496772/388361762036121610/moretears.png');
  	}
});

client.on('message', message => {
    if (message.content === '!thegays') {
    	message.channel.send('http://j.gifs.com/OY0VpE.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!fufu') {
    	message.channel.send('https://i.imgur.com/RXMDIv1.gif');
  	}
});

client.on('message', message => {
    if (message.content === '!disgusting') {
    	message.channel.send('https://i.imgur.com/cOzptAe.png');
  	}
});

client.on('message', message => {
    if (message.content === '!gaypowerlevel') {
    	message.channel.send('https://78.media.tumblr.com/0550f3c6a806b238fff1d87a5a9ae808/tumblr_inline_msaa8cAkb51qz4rgp.png');
  	}
});

client.on('message', message => {
    if (message.content === '!io') {
    	message.channel.send('https://cdn.discordapp.com/attachments/387669625753567232/393212366378237952/io.png');
  	}
});
//Test Features! ^^^
client.on('message', message => {
    if (message.content === '!commands') {
    	message.author.send("Hello! I'm Rotom, a discord bot created by **Radiating#9066** using **Discord.js**! Here's the list of available commands!\n```- !rotom\n- !pineapple\n- !fusions\n- !soap\n- !soapy\n- !thegays\n- !fufu\n- !disgusting\n- !gaypowerlevel\n- !io\n- !getavatar```");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
