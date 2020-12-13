const discord = require('discord.js');
const bot = new discord.Client();

const token = 'NzY2ODc1MDA0ODc1ODMzMzY1.X4puAQ.FtYzpsNJyfCnyLSl6PnBkKAa3h8';

var http = require('http');  

http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

bot.on('ready', () => {

    console.log('Your Bot is now Online.')
    let activities = [`chill gang`, `with the gang`, `with the gang`   ],i = 0;
  
    setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"STREAMING",url:"https://www.youtube.com/watch?v=DWcJFNfaw9c"  }), 5000)
})


bot.on('ready', () =>{
        console.log('Bot online')
    });

bot.on('message', msg=>{
    if(msg.content === "cry"){
        msg.channel.send('https://tenor.com/view/cute-cat-crying-tears-sad-emotional-gif-15881815');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Cry"){
        msg.channel.send('https://tenor.com/view/cute-cat-crying-tears-sad-emotional-gif-15881815');
    }
})


bot.on('message', msg=>{
    if(msg.content === "dance"){
        msg.channel.send('https://storage.googleapis.com/discordstreet/emojis/1afe6a46-a929-4083-bf76-be70f887d050.gif');
    }
})

bot.on('message', msg=>{
    if(msg.content === "goose"){
        msg.channel.send('https://tenor.com/view/goose-geese-aflac-gif-5453422');
    }
})
bot.on('message', msg=>{
    if(msg.content === "Dance"){
        msg.channel.send('https://storage.googleapis.com/discordstreet/emojis/1afe6a46-a929-4083-bf76-be70f887d050.gif');
    }
})

bot.on('message', msg=>{
    if(msg.content === "Goose"){
        msg.channel.send('https://tenor.com/view/goose-geese-aflac-gif-5453422');
    }
})
bot.on('message', msg=>{
    if(msg.content === "blob"){
        msg.channel.send('https://cdn.discordapp.com/emojis/692900959780864101.gif?v=1');
    }
})  
bot.on('message', msg=>{
    if(msg.content === "Blob"){
        msg.channel.send('https://cdn.discordapp.com/emojis/692900959780864101.gif?v=1');
    }
})  

bot.on('message', msg=>{
    if(msg.content === "prefix"){
        msg.channel.send(' My current prefix is ``/``');
    }
}) 

bot.on('message', msg=>{
    if(msg.content === "/invite"){
        msg.reply(' Here ya go https://discord.com/oauth2/authorize?client_id=766875004875833365&permissions=1133584&scope=bot');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "/commands"){
        msg.channel.send('Commands- prefix,uwu,kek,cry,sleeping,blob,dance,goose,noo,rickroll,E invite, E help , E ping');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "uwu"){
        msg.channel.send('https://cdn.discordapp.com/emojis/763646200237916190.png?v=1');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "kek"){
        msg.channel.send('https://cdn.discordapp.com/emojis/759267343259664454.gif?v=1');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "sleeping"){
        msg.channel.send('https://cdn.discordapp.com/emojis/748987509802926220.png?v=1');
    }
}) 

bot.on('message', msg=>{
    if(msg.content === "noo"){
        msg.channel.send('https://cdn.discordapp.com/emojis/393801578387210240.gif?v=1');
    }
}) 
bot.on('message', msg=>{
    if(msg.content === "Uwu"){
        msg.channel.send('https://cdn.discordapp.com/emojis/763646200237916190.png?v=1');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "Kek"){
        msg.channel.send('https://cdn.discordapp.com/emojis/759267343259664454.gif?v=1');
    }
}) 


bot.on('message', msg=>{
    if(msg.content === "Sleeping"){
        msg.channel.send('https://cdn.discordapp.com/emojis/748987509802926220.png?v=1');
    }
}) 

bot.on('message', msg=>{
    if(msg.content === "Noo"){
        msg.channel.send('https://cdn.discordapp.com/emojis/393801578387210240.gif?v=1');
    }
}) 

bot.on('message', msg=>{
    if(msg.content === "/serverinfo"){
        msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);

    }
}) 

bot.on('message', msg=>{
    if(msg.content === "rickroll"){
        msg.channel.send('https://tenor.com/view/rickroll-dance-funny-you-music-gif-7755460');
    }
}) 
bot.on('message', msg=>{
    if(msg.content === "Rickroll"){
        msg.channel.send('https://tenor.com/view/rickroll-dance-funny-you-music-gif-7755460');
    }
}) 

  bot.on('message', msg=>{

    if (msg.content === "/ping") {
      const embed = new discord.MessageEmbed()
        .setTitle(`🏓Latency is ${Date.now() -  msg.createdTimestamp}ms. API Latency is ${Math.round(bot.ws.ping)}ms`)
        .setColor('#1C8AD1')
      msg.channel.send(embed);
    }
})

bot.on('message', msg=>{
    if(msg.content === "vibe"){
        msg.channel.send('https://cdn.discordapp.com/emojis/784112604016541791.gif?v=1');
    }
})   

bot.on('message', msg=>{
    if(msg.content === "ooo"){
        msg.channel.send('https://cdn.discordapp.com/emojis/763145905792483398.gif?v=1');
    }
})   
bot.on('message', msg=>{
    if(msg.content === "whaa"){
        msg.channel.send('https://cdn.discordapp.com/emojis/647608820696350728.gif?v=1');
    }
})   
bot.on('message', msg=>{
    if(msg.content === "sad"){
        msg.channel.send('https://cdn.discordapp.com/emojis/755080532886290502.gif?v=1');
    }
})   

bot.on('message', msg=>{
    if(msg.content === "Vibe"){
        msg.channel.send('https://cdn.discordapp.com/emojis/784112604016541791.gif?v=1');
    }
})   

bot.on('message', msg=>{
    if(msg.content === "Ooo"){
        msg.channel.send('https://cdn.discordapp.com/emojis/763145905792483398.gif?v=1');
    }
})   
bot.on('message', msg=>{
    if(msg.content === "Whaa"){
        msg.channel.send('https://cdn.discordapp.com/emojis/647608820696350728.gif?v=1');
    }
})   
bot.on('message', msg=>{
    if(msg.content === "Sad"){
        msg.channel.send('https://cdn.discordapp.com/emojis/755080532886290502.gif?v=1');
    }
})   

const { Client, CategoryChannel, MessageEmbed } = require("discord.js");


bot.on('message', msg=>{

    if (msg.content === "/help") {
      const embed = new discord.MessageEmbed()
        .setTitle('Help')
        .setURL('https://www.youtube.com/watch?v=oHg5SJYRHA0')
        .setAuthor('example')
        .setDescription('Shows help incase u didnt notice')
        .setColor('#FF2D00')
        .setThumbnail('https://cdn.discordapp.com/emojis/692900959780864101.gif?v=1')
        .setImage('https://cdn.discordapp.com/emojis/784112604016541791.gif?v=1')
        .setFooter('Sup', 'https://cdn.discordapp.com/emojis/748987509802926220.png?v=1')
        .addFields({
          name: '/serverinfo',
          value: 'Displayes serverinfo lol',
          inline: true
        }, {
          name: '/commands',
          value: 'lists all commands kek',
          inline: true
        }, {
          name: '/ping',
          value: 'Shows the ping i guess'
        }, {
          name: '/invite',
          value: 'Use this to invite the bot to your server pls'
        })
        .setTimestamp();

      msg.channel.send(embed);
    }
})


bot.login(token);
